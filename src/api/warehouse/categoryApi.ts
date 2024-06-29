import axiosInstances from "@/config/axios";


const requestWareHouse = axiosInstances.warehouse
const ROOT_CATEGORY = "/category"

const getAllCategory = ()=>requestWareHouse.get(`${ROOT_CATEGORY}/GetAllCategory`)

const categoryApi ={
    getAllCategory
};


export default categoryApi;