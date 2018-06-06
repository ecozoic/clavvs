import { observable, action } from 'mobx';

class SectionStore {
  @observable sections = [];

  @action('replace sections')
  replaceSections(newSections) {
    this.sections.replace(newSections.map((newSection) => {
      if (newSection.contents) {
        return newSection;
      }

      return {
        ...newSection,
        contents: [],
      };
    }));
  }
}

export default SectionStore;
