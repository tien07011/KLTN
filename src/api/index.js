import apisauce from "apisauce";
import { ApiConstant, KeyConstant, LangConstant } from "const";
import { getCookies } from "utils";

export const API_CONFIG = {
  baseURL: ApiConstant.BASE_URL,
  timeout: ApiConstant.TIMEOUT,
  imageRootUrl: ApiConstant.IMAGE_ROOT_URL,
  headers: ApiConstant.HEADER_DEFAULT,
};

export const createApiByConfig = (initConfig = API_CONFIG) => {
  let appLang = getCookies(KeyConstant.KEY_LANG_CODE) || LangConstant.DEFAULT_LANG;

  initConfig.headers.lang = appLang;

  return apisauce.create(initConfig);
};
