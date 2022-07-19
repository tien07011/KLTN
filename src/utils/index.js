import Cookies from "js-cookie";

export const toJsonArray = array => {
    let jsonData = {};
    for (var i = 0; i < array.length; i++) {
        jsonData[array[i].id] = array[i];
    }
    return jsonData;
};

export const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        .replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        })
        .replace(/-/g, "");
};

export const getError = response => {
    let errorContent = "";
    if (response) {
        const {error, message} = response;
        if (error) {
            let isJson = typeof error === "object" && Object.keys(error).length > 0;
            if (isJson) {
                Object.keys(error).map(key => {
                    errorContent += `${upperCaseFirstLetter(key)}: ${upperCaseFirstLetter(error[key])} <br/>`;
                });
            } else {
                errorContent = error;
            }
        } else {
            errorContent = message;
        }
    }
    return isString(errorContent) ? upperCaseFirstLetter(errorContent) : JSON.stringify(errorContent);
};

export const formatPaging = data => {
    let payload = typeof data === "object" && data !== null ? data : {};
    let page = payload.page ? payload.page : 1;
    let size = payload.size ? payload.size : 10;

    return {...payload, page: page, size: size};
};

export const setCookies = (key, value, expired, option = {}) => {
    let expiredTime = expired && Number.isInteger(expired) && !Number.isNaN(expired) ? expired : 14;
    Cookies.set(key, value, {...option, expires: expiredTime});
};

export const getCookies = key => {
    return Cookies.get(key);
};

export const getNSKey = (namespace, key) => `${namespace}:${key}`;

export const snakeToCamelCase = str =>
    str.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace("-", "").replace("_", ""));

export const camelToSnakeCase = str =>
    (str.charAt(0).toLowerCase() + str.slice(1) || str).replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const toCamel = obj => {
    var newObj, origKey, newKey, value;
    if (obj instanceof Array) {
        return obj.map(function (value) {
            if (typeof value === "object") {
                value = toCamel(value);
            }
            return value;
        });
    } else {
        newObj = {};
        for (origKey in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, origKey)) {
                newKey = snakeToCamelCase(origKey);
                value = obj[origKey];
                if (value instanceof Array || (value && value.constructor === Object)) {
                    value = toCamel(value);
                }
                newObj[newKey] = value;
            }
        }
    }
    return newObj;
};

export const toSnake = obj => {
    var newObj, origKey, newKey, value;
    if (obj instanceof Array) {
        return obj.map(function (value) {
            if (typeof value === "object") {
                value = toSnake(value);
            }
            return value;
        });
    } else {
        newObj = {};
        for (origKey in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, origKey)) {
                newKey = camelToSnakeCase(origKey);
                value = obj[origKey];
                if (value instanceof Array || (value && value.constructor === Object)) {
                    value = toSnake(value);
                }
                newObj[newKey] = value;
            }
        }
    }
    return newObj;
};

export const checkAccessToken = () => {
    let access_token;
    if (typeof window !== 'undefined') {
        access_token = localStorage.getItem("access_token");
    }
    if (access_token == null) {
        return false;
    }
    return true;
}
