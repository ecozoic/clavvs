class ContactForm {
  constructor(formId='contact-form') {
    this.formId = formId;
  }

  init() {
    const form = document.getElementById(this.formId);
    const messageBox = form.querySelector('.message');
    const sendBtn = form.querySelector('.send');

    messageBox.addEventListener('input', (evt) => {
      if (evt.target.value) {
        messageBox.classList.add('full');
      } else {
        messageBox.classList.remove('full');
      }
    });

    sendBtn.addEventListener('click', (evt) => {
      if (sendBtn.disabled) {
        evt.stopPropagation();
        return;
      }

      sendBtn.classList.add('sending');
      sendBtn.disabled = true;

      setTimeout(() => {
        sendBtn.classList.remove('sending');
        sendBtn.disabled = false;
      }, 2000);
    });
  }
}

export { ContactForm };
