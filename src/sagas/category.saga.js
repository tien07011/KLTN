import { call, put } from "redux-saga/effects";
import { ApiConstant } from "const";
import CategoryAction from "redux/category.redux";
import { MenuService } from "services";

export function* getCategory(action) {
    if (!Boolean(action.data)) return;
    try {
        let response = yield call(MenuService.getCategory);
        console.log(response);
        let responseData = response.data.data;
        if (response.status == ApiConstant.STT_OK) {
            yield put(CategoryAction.getCategory(responseData));
        } else {
            yield put(CategoryAction.getCategoryFailure(response.data));
        }
    } catch (error) {
        console.log(error);
        yield put(CategoryAction.getCategoryFailure(error));
    }
}
