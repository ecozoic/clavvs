document.addEventListener('DOMContentLoaded', function() {

  // contact us form
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

  // calendar event countdowns
  var calendar = document.getElementById('calendar');
  var events = [].slice.call(calendar.querySelectorAll('.event'));

  if (events && events.length) {
    updateCountdowns(events);

    var interval = setInterval(function() {
      var hasValidEvent = events.some(function(event) {
        return !!event;
      });

      if (hasValidEvent) {
        updateCountdowns(events);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  function getRemainingTime(startTime, endTime) {
    var t = endTime - startTime;

    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function updateCountdowns(events) {
    var startDate = new Date();

    var times = events.map(function(event) {
      if (event === null) return null;

      var endDate = new Date(event.dataset.eventTime);
      return getRemainingTime(startDate, endDate);
    });

    times.forEach(function(time, index) {
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
