import axiosInstances from "@/config/axios"

const requestWareHouse = axiosInstances.shop

export const getCart = (id: string) => requestWareHouse.get(`/cart/GetCart/${id}`);

const a = {
    getCart
};

export default a;