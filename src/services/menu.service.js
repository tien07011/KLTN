import {ApiConstant} from "const";
import {createApiWithAuthorization} from "api";

export const getCategory = (action) => {
    createApiWithAuthorization().get(ApiConstant.GET_CATEGORY);
}

