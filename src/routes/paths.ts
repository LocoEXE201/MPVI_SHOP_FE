function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT = '/';

export const PATH_AUTH = {
  login: '/login',
  loginForgotPassword: (email: string) => `/login/forgotPassword/${email}`,
  register: '/register'
};

export const PATH_SHOP = {
  root: "/",
  about: "/about",
  news: "/news",
  products: "/products",
  productDetails:(categoryId: number) => `/products/productDetails/${categoryId}`,
  cart:"/cart",
  payment:"/payment",
  order:"/order",
  orderDetails: (orderId: number) => `/order/orderDetails/${orderId}`,
  profile:"/profile"

};