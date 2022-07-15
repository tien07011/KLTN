import { ApiConstant } from "const";
import { createApiWithCookie } from "api";

export const login = (data) => createApiWithCookie().post(ApiConstant.POST_AUTH_LOGIN, JSON.stringify(data));

export const providerAuth = (data) => createApiWithCookie().post(ApiConstant.POST_PROVIDER_AUTH, JSON.stringify(data));
