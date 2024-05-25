import axiosInstances from "@/config/axios";

const requestWareHouse = axiosInstances.warehouse
const ROOT_SUPER_CATEGORY = "/superCategory"

const getAllSuperCategory = () => requestWareHouse.post(`${ROOT_SUPER_CATEGORY}/GetAllSuperCategory`)

const superCategoryApi ={
    getAllSuperCategory
};

export default superCategoryApi;