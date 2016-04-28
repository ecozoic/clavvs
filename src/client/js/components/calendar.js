class Calendar {
  constructor(calendarId = 'calendar') {
    this.calendarId = calendarId;
  }

  init() {
    const calendar = document.getElementById(this.calendarId);
    const events = Array.from(calendar.querySelectorAll('.event'));

    if (events && events.length) {
      this.updateCountdowns(events);

      const interval = setInterval(() => {
        const hasValidEvent = events.some((event) => !!event);

        if (hasValidEvent) {
          this.updateCountdowns(events);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  }

  getRemainingTime(startTime, endTime) {
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

  updateCountdowns(events) {
    const startDate = new Date();

    const times = events.map((event) => {
      if (event === null) return null;

      const endDate = new Date(event.dataset.eventTime);
      return this.getRemainingTime(startDate, endDate);
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
        days.innerHTML = this.getCounter(time.days);
        hours.innerHTML = this.getCounter(time.hours);
        minutes.innerHTML = this.getCounter(time.minutes);
        seconds.innerHTML = this.getCounter(time.seconds);
      }
    });
  }

  getCounter(count) {
    return count >= 10 ? count : '0' + count;
  }
}

export { Calendar };
