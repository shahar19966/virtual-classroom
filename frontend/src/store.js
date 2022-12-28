import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer,userRegisterReducer,userUpdateReducer} from "./reducers/userReducers";
import { patientsListReducer,patientsCreateReducer,patientsUpdateReducer,patientDeleteReducer} from "./reducers/patientReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  patientList:patientsListReducer,
  patientCreate: patientsCreateReducer,
  patientUpdate: patientsUpdateReducer,
  patientDelete: patientDeleteReducer,
  });
  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  };
  
  const middleware = [thunk];
  
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;