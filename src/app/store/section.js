import { observable, computed, action } from 'mobx';
import { sortBy } from 'lodash-es';

import sections from '../data/sections';

class SectionStore {
  @observable originalSections = sections;

  @computed
  get enabledSections() {
    return this.originalSections.filter(s => s.enabled);
  }

  @computed
  get sections() {
    return sortBy(this.enabledSections, 'sortIndex');
  }

  @action
  toggleSectionEnabled(index) {
    this.originalSections[index].enabled = !this.originalSections[index].enabled;
  }

  @action
  setSectionSortIndex(index, sortIndex) {
    this.originalSections[index].sortIndex = sortIndex;
  }

  @action
  addSection(section) {
    this.originalSections.push(section);
  }
}

export default SectionStore;
