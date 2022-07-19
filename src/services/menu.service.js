import {ApiConstant} from "const";
import {createApiWithAuthorization} from "api";

export const getCategory = (action) => {
    createApiWithAuthorization().get(ApiConstant.GET_CATEGORY);
}

export const getItem = () => {
    createApiWithAuthorization().get(ApiConstant.GET_ITEM);
}

export const getItemDetail= () => {
    createApiWithAuthorization().get(ApiConstant.GET_ITEM_DETAIL);
}


