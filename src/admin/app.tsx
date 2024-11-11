import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['ru'],
    translations: {
      ru: {
        User: 'Пользователи',
        News: 'Новости',
        Tea: 'Чай',
        "Tea Collection": 'Коллекции чая',
      }
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
