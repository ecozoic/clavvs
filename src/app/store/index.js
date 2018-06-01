import FooterStore from './footer';
import HeroStore from './hero';
import SocialsStore from './socials';

class Store {
  footer = new FooterStore();
  hero = new HeroStore();
  socials = new SocialsStore();
}

export default Store;
