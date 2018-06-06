import { observable, action } from 'mobx';

class FooterStore {
  @observable links = [];

  @action('clear footer links')
  clearLinks() {
    this.links.clear();
  }

  @action('replace footer links')
  replaceLinks(newLinks) {
    this.links.replace(newLinks);
  }

  @action('add footer link')
  addLink(newLink) {
    this.links.push(newLink);
  }

  @action('remove footer link')
  removeLink(id) {
    const toRemove = this.links.find(l => l.id === id);

    if (toRemove) {
      this.links.remove(toRemove);
    }
  }

  @action('update footer link')
  updateLink(id, updatedLink) {
    const index = this.links.findIndex(l => l.id === id);
    this.links[index] = updatedLink;
  }
}

export default FooterStore;
