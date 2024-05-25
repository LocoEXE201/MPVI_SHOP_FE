import axiosInstances from "@/config/axios";

<<<<<<< HEAD
const requestWareHouse = axiosInstances.warehouse
const ROOT_SUPER_CATEGORY = "/superCategory"

const getAllSuperCategory = () => requestWareHouse.post(`${ROOT_SUPER_CATEGORY}/GetAllSuperCategory`)

const superCategoryApi ={
=======

const requestWareHouse = axiosInstances.warehouse
const ROOT_SUPERCATEGORY = "/superCategory"

const getAllSuperCategory = () => requestWareHouse.post(`${ROOT_SUPERCATEGORY}/GetAllSuperCategory`, )

const superCategoryApi = {
>>>>>>> 19a452aa1880d8d6b294a21dcb6a57ce0229d307
    getAllSuperCategory
};

export default superCategoryApi;