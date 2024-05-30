import axiosInstances from "@/config/axios";
import { headers } from "next/headers";

const requestAuth = axiosInstances.auth
const ROOT_AUTH ="/auth"

const loadUserToken = () => {
    const token = localStorage.getItem("accessToken");
    return token
  };

const confirmEmail = (email: string,
    code: number,) => requestAuth.get(`${ROOT_AUTH}/ConfirmEmail`, {params:{email: email,
    code: code}})

const sendCodeForgotPassword = (email: string) => requestAuth.post(`${ROOT_AUTH}/ForgotPassword?email=${email}`)

const confirmResetPassCode = (email: string, code: string, newPassword: string) => requestAuth.post(`${ROOT_AUTH}/ConfirmResetPassCode?email=${email}&code=${code}&newpass=${newPassword}`)
const updateAccount = (account: object) => requestAuth.put(`${ROOT_AUTH}/UpdateAccount`, account, {headers:{"Content-Type": "text/plain","Authorization": `Bearer ${loadUserToken()}`},withCredentials:true,})
const authApi = {
    confirmEmail,
    sendCodeForgotPassword,
    confirmResetPassCode, 
    updateAccount
};
  
export default authApi;