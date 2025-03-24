class CountrySelector {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.countries = [];
        this.init();
    }

    async init() {
        await this.fetchCountries();
        this.createDropdown();
    }

    async fetchCountries() {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            this.countries = data.map(country => ({
                name: country.name.common,
                flag: country.flags.svg,
                code: country.cca2
            })).sort((a, b) => a.name.localeCompare(b.name));
        } catch (error) {
            console.error('Error fetching country data:', error);
        }
    }

    createDropdown() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('country-selector-wrapper');

        const flagWrapper = document.createElement('div');
        flagWrapper.classList.add('flag-wrapper');
        const flagImg = document.createElement('img');
        flagImg.classList.add('flag');
        flagWrapper.appendChild(flagImg);

        const codeWrapper = document.createElement('div');
        codeWrapper.classList.add('country-code-wrapper');
        const countryCode = document.createElement('span');
        countryCode.classList.add('country-code');
        countryCode.textContent = 'US'; // Default
        const arrowIcon = document.createElement('span');
        arrowIcon.classList.add('arrow-icon');
        arrowIcon.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        codeWrapper.appendChild(countryCode);
        codeWrapper.appendChild(arrowIcon);

        const dropdownList = document.createElement('ul');
        dropdownList.classList.add('dropdown-list');

        this.countries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.textContent = country.name;
            listItem.setAttribute('data-code', country.code);
            listItem.setAttribute('data-flag', country.flag);
            listItem.addEventListener('click', () => {
                flagImg.src = country.flag;
                countryCode.textContent = country.code;
                dropdownList.style.display = 'none';
            });
            dropdownList.appendChild(listItem);
        });

        wrapper.appendChild(flagWrapper);
        wrapper.appendChild(codeWrapper);
        wrapper.appendChild(dropdownList);
        this.element.appendChild(wrapper);

        // Default selection
        flagImg.src = this.countries[0].flag;
        countryCode.textContent = this.countries[0].code;

        // Toggle dropdown
        codeWrapper.addEventListener('click', () => {
            dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
        });

        // Close dropdown on outside click
        document.addEventListener('click', (event) => {
            if (!wrapper.contains(event.target)) {
                dropdownList.style.display = 'none';
            }
        });
    }
}

// Initialize
new CountrySelector('#country-selector');