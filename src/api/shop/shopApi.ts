import axiosInstances from "@/config/axios";
import { onValue } from 'firebase/database';
import { headers } from "next/headers";


const requestShop = axiosInstances.shop;
const ROOT_SHOP = "/shop"

const createOrder = (method:string, data:object) => requestShop.post (`${ROOT_SHOP}/CreateOrder?paymentName=${method}`,data, {withCredentials:true})
const createPaymentUrl = (data:object) => requestShop.post(`${ROOT_SHOP}/CreatePaymentUrl`, data,  { headers: {"Content-Type": "application/json"},withCredentials:true} )
const getOrderByCondition = (userId: any)=>requestShop.get(`${ROOT_SHOP}/GetOrderbyCondition?userid=${userId}`,  {withCredentials:true}) 
const shopApi = {
    createOrder,
    createPaymentUrl,
    getOrderByCondition
};

export default shopApi;