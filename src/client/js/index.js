// build scss
require('../css/index.scss');

document.addEventListener('DOMContentLoaded', () => {

  // contact us form
  const messageBox = document.getElementById('message');
  messageBox.addEventListener('input', (evt) => {
    if (evt.target.value) {
      messageBox.classList.add('full');
    } else {
      messageBox.classList.remove('full');
    }
  });

  const sendBtn = document.getElementById('send');
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

  // calendar event countdowns
  const calendar = document.getElementById('calendar');
  const events = Array.from(calendar.querySelectorAll('.event'));

  if (events && events.length) {
    updateCountdowns(events);

    const interval = setInterval(() => {
      const hasValidEvent = events.some((event) => !!event);

      if (hasValidEvent) {
        updateCountdowns(events);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  function getRemainingTime(startTime, endTime) {
    const total = endTime - startTime;

    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function updateCountdowns(events) {
    const startDate = new Date();

    const times = events.map((event) => {
      if (event === null) return null;

      const endDate = new Date(event.dataset.eventTime);
      return getRemainingTime(startDate, endDate);
    });

    times.forEach((time, index) => {
      if (time === null) return;

      var event = events[index];
      var days = event.querySelector('.days .counter');
      var hours = event.querySelector('.hours .counter');
      var minutes = event.querySelector('.minutes .counter');
      var seconds = event.querySelector('.seconds .counter');

      if (time.total <= 0) {
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';

        events[index] = null;
      } else {
        days.innerHTML = getCounter(time.days);
        hours.innerHTML = getCounter(time.hours);
        minutes.innerHTML = getCounter(time.minutes);
        seconds.innerHTML = getCounter(time.seconds);
      }
    });
  }

  function getCounter(count) {
    return count >= 10 ? count : '0' + count;
  }
});
