import { observable, computed, action } from 'mobx';
import { sortBy } from 'lodash-es';

import footer from '../data/footer';

class FooterStore {
  @observable originalLinks = footer.links;

  @computed
  get enabledFooterLinks() {
    return this.originalLinks.filter(l => l.enabled);
  }

  @computed
  get links() {
    return sortBy(this.enabledFooterLinks, 'sortIndex');
  }

  @action
  toggleLinkEnabled(index) {
    this.originalLinks[index].enabled = !this.originalLinks[index].enabled;
  }

  @action
  setLinkSortIndex(index, sortIndex) {
    this.originalLinks[index].sortIndex = sortIndex;
  }

  @action
  addLink(link) {
    this.originalLinks.push(link);
  }
}

export default FooterStore;
