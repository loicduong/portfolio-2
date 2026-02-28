const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  vn: () => import('./vn.json').then((module) => module.default),
  jp: () => import('./jp.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'vn' | 'jp') => {
  return dictionaries[locale]();
};
