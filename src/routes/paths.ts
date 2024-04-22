function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT = '/';

export const PATH_AUTH = {
  login: '/login',
  register: '/register'
};

export const PATH_SHOP = {
  root: "/",
  about: "/about",
  news: "/news",
  products: "/products",
};