# Country Selector Plugin (Vanilla JavaScript)

## Introduction
The **Country Selector Plugin** is a lightweight Vanilla JavaScript plugin that allows users to select a country from a dropdown list. It dynamically fetches country data (name, flag, and code) from the **REST Countries API** and displays the selected country's flag and code.

## Features
✅ Uses **REST Countries API** to fetch data dynamically.  
✅ Displays **flag** and **country code** in a custom dropdown UI.  
✅ Allows **easy styling and customization** using CSS.  
✅ Closes the dropdown when clicking outside.  
✅ Supports **dynamic updates** based on user selection.  

## Installation
No additional dependencies are required. Simply include the `CountrySelector` script in your project.

```html
<!-- Include FontAwesome for icons (optional) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Include your script -->
<script src="path/to/country-selector.js" defer></script>

<!-- Add an empty div where the plugin will be initialized -->
<div id="country-selector"></div>
```

## Usage
Initialize the plugin by passing the **CSS selector** where you want to render it.

```javascript
new CountrySelector('#country-selector');
```

## HTML Structure (Generated by Plugin)
```html
<div class="country-selector-wrapper">
    <div class="flag-wrapper">
        <img class="flag" src="" alt="flag">
    </div>
    <div class="country-code-wrapper">
        <span class="country-code">US</span>
        <span class="arrow-icon">
            <i class="fa-solid fa-chevron-down"></i>
        </span>
    </div>
    <ul class="dropdown-list">
        <li data-code="US" data-flag="url-to-flag">United States</li>
        <li data-code="CA" data-flag="url-to-flag">Canada</li>
        <!-- More countries -->
    </ul>
</div>
```

## Customization
### 1️⃣ Change Default Country
To set a specific country as the default, modify the initialization method:
```javascript
new CountrySelector('#country-selector', { defaultCountry: 'IN' });
```

### 2️⃣ Modify Styles
Override the default CSS to customize the appearance:
```css
.country-selector-wrapper {
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background: white;
    cursor: pointer;
}

.dropdown-list li:hover {
    background-color: #f0f0f0;
}
```

### 3️⃣ Handle Selection Event
If you need to perform an action when a country is selected:
```javascript
const countrySelector = new CountrySelector('#country-selector');
document.addEventListener('countrySelected', (event) => {
    console.log('Selected Country:', event.detail);
});
```

## API Methods
| Method | Description |
|--------|-------------|
| `new CountrySelector(selector, options)` | Initializes the plugin |
| `.getSelectedCountry()` | Returns the currently selected country |
| `.setCountry(code)` | Programmatically sets the country using its code |

### Example:
```javascript
const selector = new CountrySelector('#country-selector');
console.log(selector.getSelectedCountry()); // { name: "United States", code: "US", flag: "..." }
selector.setCountry('FR'); // Sets France as the selected country
```

## Conclusion
This plugin provides an easy way to integrate a country selector into your web application. You can further enhance it by adding search functionality, themes, or additional data fields.

🔗 Feel free to contribute and share feedback! 😊
