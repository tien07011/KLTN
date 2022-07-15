import apisauce from "apisauce";
import {ApiConstant, KeyConstant, LangConstant} from "const";
import {getCookies} from "utils";

export const API_CONFIG = {
    baseURL: ApiConstant.BASE_URL,
    timeout: ApiConstant.TIMEOUT,
    imageRootUrl: ApiConstant.IMAGE_ROOT_URL,
    headers: ApiConstant.HEADER_DEFAULT,
};

export const createApiWithCookie = (initConfig = API_CONFIG, cookie) => {
    let appCookie = cookie || KeyConstant.KEY_COOKIE;
    if (appCookie) {
        initConfig.headers.Authorization = `SESSION=${appCookie}`;
    }

    initConfig.headers.Cookies = appCookie;

    return apisauce.create(initConfig);
};

export const createApiWithAuthorization = (initConfig = API_CONFIG, cookie) => {
    let appCookie = cookie || KeyConstant.KEY_COOKIE;
    if (appCookie) {
        initConfig.headers.Authorization = `SESSION=${appCookie}`;
    }

    initConfig.headers.Cookies = appCookie;
    initConfig.headers.Authorization = localStorage.getItem("access_token");
    return apisauce.create(initConfig);
};

