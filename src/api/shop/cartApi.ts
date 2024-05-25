import axiosInstances from "@/config/axios";

const requestShop = axiosInstances.shop;
const ROOT_CART = "/cart"

const cartUpsert = (data:object) => requestShop.post(`${ROOT_CART}/CartUpsert`, data)

const cartApi = {
    cartUpsert
}

export default cartApi