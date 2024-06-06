import axiosInstances from "@/config/axios";

const requestShop = axiosInstances.shop;
const ROOT_CUSTOMER = "/Customer"

const loadUserToken = () => {
    const token = localStorage.getItem("accessToken");
    return token
  };

  const getCustomerInfoByCustomerID = (customerId: string) => requestShop.get(`${ROOT_CUSTOMER}/GetCustomerByID?addrIDess=${customerId}`, {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true});
  const createAddress = (data:object) => requestShop.post(`${ROOT_CUSTOMER}/CreateCustomer`, data,  {headers:{"Content-Type": "application/json","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true} );
  const addNewAddress = (data:object, customerId: string) => requestShop.post(`${ROOT_CUSTOMER}/AddNewAddress?custID=${customerId}`, data, {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true});
  const deleteAddress = (customerId:string, addressId: string) => requestShop.delete(`${ROOT_CUSTOMER}/DeleteAddress?custID=${customerId}&addressID=${addressId}`,{headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`} ,withCredentials:true} );

  const customerApi ={
    getCustomerInfoByCustomerID,
    createAddress,
    addNewAddress,
    deleteAddress
  };

  export default customerApi;
