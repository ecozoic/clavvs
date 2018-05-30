import { sortBy } from 'lodash-es';

export default {
  links: sortBy([
    {
      id: 'mgmt',
      header: 'mgmt',
      text: 'ari@sorrymomproductions.com',
      href: 'mailto:ari@sorrymomproductions.com',
      enabled: true,
      sortIndex: 0,
    },
    {
      id: 'website',
      header: 'website',
      text: 'ecozoic',
      href: 'https://github.com/ecozoic',
      enabled: true,
      sortIndex: 1,
    },
  ].filter(l => l.enabled), 'sortIndex'),
};
