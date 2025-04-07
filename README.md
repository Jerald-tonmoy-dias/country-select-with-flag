# 🌍 Country Selector with Flag Plugin (Vanilla JavaScript)

## 🚀 Introduction
The **Country Selector with Flag** is a lightweight, customizable Vanilla JavaScript plugin that allows users to select a country from a searchable dropdown. It displays the selected country's **flag** and **ISO code**, and offers a clean API for developers to interact with.

## ✨ Features
✅ No dependencies – pure Vanilla JavaScript  
✅ Displays **flag** and **country code** in a custom dropdown UI  
✅ Fully **searchable country list**  
✅ Easily **customizable styles**  
✅ Closes dropdown on outside click  
✅ Set default selected country  
✅ Programmatically get/set selected country  
✅ **onChange callback** to trigger any function (AJAX, etc.) when a country is selected  

---

## 📦 Installation

Include the necessary CSS and JS in your HTML:

```html
<!-- Optional: FontAwesome for dropdown icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Country Selector CSS -->
<link rel="stylesheet" href="path/to/country-select-with-flag.css">

<!-- Country Selector JS -->
<script src="path/to/country-select-with-flag.js" defer></script>
```

Add a placeholder `<div>` where the plugin should render:

```html
<div id="cswf_country-selector"></div>
```

---

## ⚙️ Usage

### ✅ Basic Initialization

```javascript
new CountrySelector('#cswf_country-selector');
```

### ✅ With Options

```javascript
const countrySelector = new CountrySelector('#cswf_country-selector', {
  defaultCountry: 'BD', // Set default country code
  flagsPath: './assets/flags/', // Path to flag images
  onChange: (selectedCountry) => {
    console.log('Selected Country:', selectedCountry);
    // You can perform AJAX, update UI, etc.
  }
});
```

---

## 📚 Public API

| Method | Description |
|--------|-------------|
| `.getSelectedCountry()` | Returns currently selected country object `{ name, code, flag }` |
| `.setCountry(code)` | Programmatically sets the country (e.g. `'US'`, `'FR'`) |

### Example:

```javascript
const selector = new CountrySelector('#cswf_country-selector');

console.log(selector.getSelectedCountry());
// Output: { name: "Bangladesh", code: "BD", flag: "./assets/flags/bd.svg" }

selector.setCountry('FR');
// Updates selection to France
```

---

## 🧱 HTML Structure (Auto-Generated)
```html
<div class="cswf_country-selector-wrapper">
  <div class="cswf_flag-wrapper">
    <img class="cswf_flag" src="" alt="flag">
  </div>
  <div class="cswf_country-code-wrapper">
    <span class="cswf_country-code">US</span>
    <span class="cswf_arrow-icon">
      <i class="fa-solid fa-chevron-down"></i>
    </span>
  </div>
  <div class="cswf_dropdown-container">
    <input type="text" class="cswf_search-input" placeholder="Search country...">
    <ul class="cswf_dropdown-list">
      <!-- List of countries -->
    </ul>
  </div>
</div>
```

---

## 🎨 Customization

### 1️⃣ Change Default Country
```javascript
new CountrySelector('#cswf_country-selector', { defaultCountry: 'FR' });
```

### 2️⃣ Style the Dropdown
Customize your styles via CSS:

```css
.cswf_country-selector-wrapper {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background: #fff;
  cursor: pointer;
}

.cswf_dropdown-list li:hover {
  background-color: #f0f0f0;
}
```

---

## 💡 Tip: Real-World Use Case (AJAX Request)
```javascript
new CountrySelector('#cswf_country-selector', {
  onChange: (country) => {
    fetch(`/api/update-country?code=${country.code}`)
      .then(res => res.json())
      .then(data => {
        console.log('Server responded:', data);
      });
  }
});
```

---

## 🧩 Future Ideas
- Multi-language support  
- Include phone dial codes  
- Region filtering (e.g. only Europe)  
- Keyboard navigation  

---

## 🙌 Contribute
Pull requests, suggestions, and bug reports are welcome!

---

## 📃 License
MIT License

---

Enjoy building! 🌍💻