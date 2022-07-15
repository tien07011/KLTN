// Common
export const BASE_URL = "http://localhost:8080";
export const IMAGE_ROOT_URL = "http://localhost:8080";
export const TIMEOUT = 30000;
export const HEADER_DEFAULT = {
  Accept: "application/json",
};

//Fixed value

// HTTP Status
export const STT_OK = 200;
export const STT_UNAUTHORIZED = 401;
export const STT_NOT_FOUND = 404;
export const STT_FORBIDDEN = 403;
export const STT_INTERNAL_SERVER = 500;

// Api

export const POST_AUTH_LOGIN = "/auth/login";
export const POST_PROVIDER_AUTH = "/provider/authorize";
export const GET_CATEGORY = "/category/read?shopCode=277_404";