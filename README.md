# popupModal

==============

## Usage

```javascript
let popupOptions = {
  container: '#popup',
  template: `<h1>hello word</h1>`,
  closeName: 'send',
  sendName: 'close',
  buttonsClass: 'popup_btns',
  closePopupClass: 'show_',
  sendButtonClass: 'send_req',
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
