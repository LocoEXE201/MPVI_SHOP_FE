import axiosInstances from "@/config/axios";
import { onValue } from 'firebase/database';
import { headers } from "next/headers";
import categoryApi from "../warehouse/categoryApi";


const requestShop = axiosInstances.shop;
const ROOT_SHOP = "/shop"

const loadUserToken = () => {
    const token = localStorage.getItem("accessToken");
    return token
  };


const createOrder = (method:string, data:object) => requestShop.post (`${ROOT_SHOP}/CreateOrder?paymentName=${method}`,data, {withCredentials:true})
const createPaymentUrl = (data:object) => requestShop.post(`${ROOT_SHOP}/CreatePaymentUrl`, data,  { headers: {"Content-Type": "application/json"},withCredentials:true} )
const getOrderByCondition = (userId: any)=>requestShop.get(`${ROOT_SHOP}/GetOrderbyCondition?userid=${userId}`,  {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true}) 
const createFeedback = (data:object) => requestShop.post(`${ROOT_SHOP}/CreateFeedback`, data, { headers: {"Content-Type": "application/json", "Authorization": `Bearer ${loadUserToken()}` },withCredentials:true}  )
const getFeedbackById = (categoryId: number)=> requestShop.get(`${ROOT_SHOP}/GetFeedbackByCondition?category_id=${categoryId}`, {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true});
const getFeedbackByIdAndRate = (categoryId: number, rate: number) => requestShop.get(`${ROOT_SHOP}/GetFeedbackByCondition?category_id=${categoryId}&rate=${rate}`, {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true});
const getFeedbackByIdAndImage = (categoryId: number, haveImage: boolean) => requestShop.get( `${ROOT_SHOP}/GetFeedbackByCondition?category_id=${categoryId}&haveImage=${haveImage}`,  {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true})
const getFeedbackByIdAndRateAndImage = (categoryId: number, rate: number, haveImage: boolean) =>requestShop.get(`${ROOT_SHOP}/GetFeedbackByCondition?category_id=${categoryId}&rate=${rate}&haveImage=${haveImage}`,  {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true})
const shopApi = {
    createOrder,
    createPaymentUrl,
    getOrderByCondition,
    createFeedback, 
    getFeedbackById,
    getFeedbackByIdAndImage,
    getFeedbackByIdAndRate,
    getFeedbackByIdAndRateAndImage
};

export default shopApi;