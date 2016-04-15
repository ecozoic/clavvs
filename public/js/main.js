document.addEventListener('DOMContentLoaded', function() {
  var messageBox = document.getElementById('message');
  messageBox.addEventListener('input', function(evt) {
    if (evt.target.value) {
      messageBox.classList.add('full');
    } else {
      messageBox.classList.remove('full');
    }
  });

  var sendBtn = document.getElementById('send');
  sendBtn.addEventListener('click', function(evt) {
    if (sendBtn.disabled) {
      evt.stopPropagation();
      return;
    }

    sendBtn.classList.add('sending');
    sendBtn.disabled = true;

    setTimeout(function() {
      sendBtn.classList.remove('sending');
      sendBtn.disabled = false;
    }, 2000);
  });
});
