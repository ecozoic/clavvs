import { observable, computed, action } from 'mobx';
import { sortBy } from 'lodash-es';

import hero from '../data/hero';

class HeroStore {
  @observable originalLinks = hero.links;

  @computed
  get enabledLinks() {
    return this.originalLinks.filter(l => l.enabled);
  }

  @computed
  get links() {
    return sortBy(this.enabledLinks, 'sortIndex');
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

export default HeroStore;
