import { observable, computed } from 'mobx';
import { sortBy } from 'lodash-es';

import footer from '../data/footer';

class Store {
  @observable footerLinks = footer.links;

  @computed
  get enabledFooterLinks() {
    return this.footerLinks.filter(fl => fl.enabled);
  }

  @computed
  get sortedEnabledFooterLinks() {
    return sortBy(this.enabledFooterLinks, 'sortIndex');
  }
}

export default Store;
