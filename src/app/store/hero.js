import { observable, action, computed } from 'mobx';
import { sortBy } from 'lodash-es';

class HeroStore {
  @observable links = [];

  @computed get sortedLinks() {
    return sortBy(this.links, 'sortIndex');
  }

  @action('clear hero links')
  clearLinks() {
    this.links.clear();
  }

  @action('replace hero links')
  replaceLinks(newLinks) {
    this.links.replace(newLinks);
  }

  @action('add hero link')
  addLink(newLink) {
    this.links.push(newLink);
  }

  @action('remove hero link')
  removeLink(id) {
    const toRemove = this.links.find(l => l.id === id);

    if (toRemove) {
      this.links.remove(toRemove);
    }
  }

  @action('update hero link')
  updateLink(id, updatedLink) {
    const index = this.links.findIndex(l => l.id === id);
    this.links[index] = updatedLink;
  }
}

export default HeroStore;
