import { observable, action } from 'mobx';

class SocialStore {
  @observable links = [];

  @action('clear social links')
  clearLinks() {
    this.links.clear();
  }

  @action('replace social links')
  replaceLinks(newLinks) {
    this.links.replace(newLinks);
  }

  @action('add social link')
  addLink(newLink) {
    this.links.push(newLink);
  }

  @action('remove social link')
  removeLink(id) {
    const toRemove = this.links.find(l => l.id === id);

    if (toRemove) {
      this.links.remove(toRemove);
    }
  }

  @action('update social link')
  updateLink(id, updatedLink) {
    const index = this.links.findIndex(l => l.id === id);
    this.links[index] = updatedLink;
  }
}

export default SocialStore;
