import apisauce from "apisauce";
import {ApiConstant, KeyConstant, LangConstant} from "const";

export const API_CONFIG = {
    baseURL: ApiConstant.BASE_URL,
    timeout: ApiConstant.TIMEOUT,
    imageRootUrl: ApiConstant.IMAGE_ROOT_URL,
    headers: ApiConstant.HEADER_DEFAULT,
};

export const createApiWithCookie = (initConfig = API_CONFIG) => {
    return apisauce.create(initConfig);
};

export const createApiWithAuthorization = (initConfig = API_CONFIG) => {
    initConfig.headers.Authorization = localStorage.getItem("access_token");
    return apisauce.create(initConfig);
};

