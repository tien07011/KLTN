/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { CategoryTypes } from "redux/category.redux";

/* ------------- Sagas ------------- */
import { getCategory } from "./category.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // shop
    takeLatest(CategoryTypes.GET_CATEGORY, getCategory),
  ]);
}
