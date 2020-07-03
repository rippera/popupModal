let popupOptions = {
  container: '#popup',
  template: `<h1>hello word</h1>`,
  closeName: 'colse',
  sendName: 'send',
  buttonsClass: 'popup_btns',
  closePopupClass: 'show_',
  sendButtonClass: 'send_req',
};

let pop = new Popup(popupOptions);
document.querySelector('#openPop').addEventListener('click', () => {
  pop.initPopup();
  pop.container.classList.add('show_');
  pop.sendButtonCallBack = function () {
    console.log('test');
    pop.container.classList.remove('show_');
  };
});
// popup 2
let popupOptions2 = {
  container: '#popup',
  template: `<h1>hello word test2</h1>`,
  closeName: 'დახურვა',
  sendName: 'გაგზავნა',
  buttonsClass: 'popup_btns',
  closePopupClass: 'show_',
  sendButtonClass: 'send_req',
};
let pop2 = new Popup(popupOptions2);
document.querySelector('#openPop2').addEventListener('click', () => {
  pop2.initPopup();
  pop2.container.classList.add('show_');
  pop2.sendButtonCallBack = function () {
    console.log('test 2');
    pop2.container.classList.remove('show_');
  };
});
