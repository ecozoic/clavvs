import { Calendar } from './components/calendar';
import { ContactForm } from './components/contact';

export class App {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const contactForm = new ContactForm();
      contactForm.init();

      const calendar = new Calendar();
      calendar.init();
    });
  }
}
