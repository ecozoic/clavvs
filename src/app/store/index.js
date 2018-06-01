import FooterStore from './footer';
import HeroStore from './hero';
import SectionStore from './section';
import SocialStore from './social';

class Store {
  footer = new FooterStore();
  hero = new HeroStore();
  social = new SocialStore();
  section = new SectionStore();
}

export default Store;
