import shortid from 'shortid';

export default {
  links: [
    {
      id: shortid.generate(),
      header: 'mgmt',
      text: 'ari@sorrymomproductions.com',
      href: 'mailto:ari@sorrymomproductions.com',
      enabled: true,
      sortIndex: 0,
    },
    {
      id: shortid.generate(),
      header: 'website',
      text: 'ecozoic',
      href: 'https://github.com/ecozoic',
      enabled: true,
      sortIndex: 1,
    },
  ],
};
