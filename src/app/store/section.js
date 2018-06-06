import { observable, action } from 'mobx';

class SectionStore {
  @observable sections = [];

  @action('clear sections')
  clearSections() {
    this.sections.clear();
  }

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

  @action('add section')
  addSection(newSection) {
    this.sections.push({
      ...newSection,
      contents: newSection.contents || [],
    });
  }

  @action('remove section')
  removeSection(id) {
    const toRemove = this.sections.find(s => s.id === id);

    if (toRemove) {
      this.sections.remove(toRemove);
    }
  }

  @action('update section')
  updateSection(id, updatedSection) {
    const index = this.sections.findIndex(s => s.id === id);
    const section = this.sections[index];
    this.sections[index] = {
      ...updatedSection,
      contents: section.contents || updatedSection.contents || [],
    };
  }

  @action('clear contents')
  clearContents(sectionId) {
    const section = this.sections.find(s => s.id === sectionId);

    if (section) {
      section.contents.clear();
    }
  }

  @action('replace contents')
  replaceContents(sectionId, newContents) {
    const section = this.sections.find(s => s.id === sectionId);

    if (section) {
      section.contents.replace(newContents);
    }
  }

  @action('add content')
  addContent(sectionId, newContent) {
    const section = this.sections.find(s => s.id === sectionId);

    if (section) {
      section.contents.push(newContent);
    }
  }

  @action('update content')
  updateContent(sectionId, contentId, updatedContent) {
    const section = this.sections.find(s => s.id === sectionId);

    if (section) {
      const index = section.contents.findIndex(c => c.id === contentId);
      section.contents[index] = updatedContent;
    }
  }

  @action('remove content')
  removeContent(sectionId, contentId) {
    const section = this.sections.find(s => s.id === sectionId);

    if (section) {
      const content = section.contents.find(c => c.id === contentId);

      if (content) {
        section.contents.remove(content);
      }
    }
  }
}

export default SectionStore;
