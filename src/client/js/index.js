// build scss
require('../css/index.scss');

import { Calendar } from './components/calendar';
import { ContactForm } from './components/contact';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = new ContactForm();
  contactForm.init();

  const calendar = new Calendar();
  calendar.init();
});
