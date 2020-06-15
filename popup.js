class Popup {
  constructor(options) {
    this.container = document.querySelector(options.container);
    this.options = options;
    this.initPopup();
    this.sendButtonCallBack;
  }
  initPopup() {
    this.container.innerHTML = '';
    this.container.innerHTML = `
        <div class="popup_content">
            <div class="popup_body">${this.options.template}</div>
            <div class="popup_footer">
                <button class="${this.options.buttonsClass} ${this.options.sendButtonClass}">${this.options.sendName}</button>
                <button class="${this.options.buttonsClass} close_popup">${this.options.closeName}</button>
            </div>
        </div> 
    `;
    this.closePopClickedWindow();
    this.closePopFromButton();
    this.closeByEscButton();
    this.sendButtonFunction();
  }
  closePopClickedWindow() {
    window.addEventListener('click', (e) => {
      if (e.target === this.container) {
        console.log('clicked on open pop');
        this.container.classList.remove(this.options.closePopupClass);
      }
    });
  }
  closePopFromButton() {
    document.querySelector('.close_popup').addEventListener('click', () => {
      this.container.classList.remove(this.options.closePopupClass);
    });
  }
  closeByEscButton() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        this.container.classList.remove(this.options.closePopupClass);
      }
    });
  }
  sendButtonFunction() {
    document
      .querySelector(`.${this.options.sendButtonClass}`)
      .addEventListener('click', () => {
        this.sendButtonCallBack();
      });
  }
}
