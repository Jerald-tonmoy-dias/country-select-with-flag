class CountrySelector {
	constructor(selector, options = {}) {
		this.element = document.querySelector(selector);
		this.defaultCountry = options.defaultCountry || 'US'; // Default country
		this.countries = [];
		this.init();
	}

	async init() {
		await this.fetchCountries();
		this.createDropdown();
	}

	async fetchCountries() {
		const cacheKey = 'countryDataCache';
		const cachedData = localStorage.getItem(cacheKey);

		if (cachedData) {
			this.countries = JSON.parse(cachedData);
		} else {
			try {
				const response = await fetch('https://restcountries.com/v3.1/all');
				const data = await response.json();
				this.countries = data.map(country => ({
					name: country.name.common,
					flag: country.flags.svg,
					code: country.cca2
				})).sort((a, b) => a.name.localeCompare(b.name));

				// Store data in localStorage for caching
				localStorage.setItem(cacheKey, JSON.stringify(this.countries));
			} catch (error) {
				console.error('Error fetching country data:', error);
			}
		}
	}

	createDropdown() {
		const wrapper = document.createElement('div');
		wrapper.classList.add('cswf_country-selector-wrapper');

		const flagWrapper = document.createElement('div');
		flagWrapper.classList.add('cswf_flag-wrapper');
		const flagImg = document.createElement('img');
		flagImg.classList.add('cswf_flag');
		flagImg.alt = 'flag';
		flagWrapper.appendChild(flagImg);

		const codeWrapper = document.createElement('div');
		codeWrapper.classList.add('cswf_country-code-wrapper');
		const countryCode = document.createElement('span');
		countryCode.classList.add('cswf_country-code');
		const arrowIcon = document.createElement('span');
		arrowIcon.classList.add('cswf_arrow-icon');
		arrowIcon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
		codeWrapper.appendChild(countryCode);
		codeWrapper.appendChild(arrowIcon);

		// Dropdown container
		const dropdownContainer = document.createElement('div');
		dropdownContainer.classList.add('cswf_dropdown-container');

		// Search input
		const searchInput = document.createElement('input');
		searchInput.classList.add('cswf_search-input');
		searchInput.type = 'text';
		searchInput.placeholder = 'Search country...';

		// Dropdown List
		const dropdownList = document.createElement('ul');
		dropdownList.classList.add('cswf_dropdown-list');

		// Append elements to dropdown container
		dropdownContainer.appendChild(searchInput);
		dropdownContainer.appendChild(dropdownList);

		this.populateDropdown(dropdownList); // Populate with country data

		// Event: Search functionality
		searchInput.addEventListener('input', (e) => {
			const searchTerm = e.target.value.toLowerCase();
			this.filterCountries(searchTerm, dropdownList);
		});

		// Prevent click event propagation when clicking inside the search input
		searchInput.addEventListener('click', (e) => {
			e.stopPropagation();
		});

		// Toggle dropdown visibility when clicking anywhere in the wrapper
		wrapper.addEventListener('click', () => {
			const isOpen = dropdownContainer.classList.contains('show');
			if (isOpen) {
				dropdownContainer.classList.remove('show');
				wrapper.classList.remove('show'); // Remove show class from wrapper
			} else {
				dropdownContainer.classList.add('show');
				wrapper.classList.add('show'); // Add show class to wrapper
			}
		});

		// Append all elements to the wrapper
		wrapper.appendChild(flagWrapper);
		wrapper.appendChild(codeWrapper);
		wrapper.appendChild(dropdownContainer);
		this.element.appendChild(wrapper);

		// Set initial country based on default
		this.setCountry(this.defaultCountry);

		// Close dropdown if clicked outside
		document.addEventListener('click', (event) => {
			if (!wrapper.contains(event.target)) {
				dropdownContainer.classList.remove('show');
				wrapper.classList.remove('show'); // Remove show class when clicking outside
			}
		});
	}

	populateDropdown(dropdownList) {
		dropdownList.innerHTML = ''; // Clear existing items
		this.countries.forEach(country => {
			const listItem = document.createElement('li');
			listItem.textContent = country.name;
			listItem.setAttribute('data-code', country.code);
			listItem.setAttribute('data-flag', country.flag);

			listItem.addEventListener('click', () => {
				this.setCountry(country.code);
			});

			dropdownList.appendChild(listItem);
		});
	}

	filterCountries(searchTerm, dropdownList) {
		const filteredCountries = this.countries.filter(country =>
			country.name.toLowerCase().includes(searchTerm)
		);
		dropdownList.innerHTML = ''; // Clear previous list

		filteredCountries.forEach(country => {
			const listItem = document.createElement('li');
			listItem.textContent = country.name;
			listItem.setAttribute('data-code', country.code);
			listItem.setAttribute('data-flag', country.flag);

			listItem.addEventListener('click', () => {
				this.setCountry(country.code);
			});

			dropdownList.appendChild(listItem);
		});
	}

	setCountry(code) {
		const selectedCountry = this.countries.find(c => c.code === code);
		if (selectedCountry) {
			this.element.querySelector('.cswf_flag').src = selectedCountry.flag;
			this.element.querySelector('.cswf_country-code').textContent = selectedCountry.code;
		}
	}
}
