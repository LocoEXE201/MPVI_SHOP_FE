import axiosInstances from "@/config/axios";


const requestWareHouse = axiosInstances.warehouse
const ROOT_SUPERCATEGORY = "/superCategory"

const getAllSuperCategory = () => requestWareHouse.post(`${ROOT_SUPERCATEGORY}/GetAllSuperCategory`, )

const superCategoryApi = {
    getAllSuperCategory
};

export default superCategoryApi;