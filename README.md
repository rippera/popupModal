# popupModal

==============

## Usage

```javascript
Options for Popup Modal
let popupOptions = {
  container: '#popup', // popup container
  template: `<h1>hello word</h1>`, // popup body template
  closeName: 'close', // close popup button name
  sendName: 'send', // send popup button name
  buttonsClass: 'popup_btns', // popup buttons class name
  closePopupClass: 'show_', // show/hide class for popup
  sendButtonClass: 'send_req', // send button class
};

let pop = new Popup(popupOptions);
```

# init Popup

```javascript
pop.initPopup();
```

# Get Pop Click Callback

```javascript
//set show Class to popup and wrtie our code here
pop.sendButtonCallBack = function () {
  pop.container.classList.remove('show_');
};
```

Template Html:

```html
<button id="openPop2">open2</button>
<div id="popup" class="popup"></div>
```
