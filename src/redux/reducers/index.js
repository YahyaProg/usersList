import {combineReducers} from "redux"
import {ShowCaptchaReducer} from "./showCaptcha"
import {valuesReducers ,FilterValues} from "./values"
import {LofinInfo} from "./userLoginInfo"
import {editPerson} from "./editPerson"
export const Reducers=combineReducers({
    ShowCaptcha:ShowCaptchaReducer,
    Values:valuesReducers,
    LofinInfo,
    FilterValues,
    editPerson
})
