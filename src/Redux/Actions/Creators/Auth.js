import { actionDispatch } from "./ActionDispatcher";
import { LOGGEDIN_SUCCESS, LOGGEDIN_FAILURE } from "../Types";

export const auth_user = (DTO) => (dispatch) => {
  const { username, password } = DTO;
  if (username === "admin" && password === "admin") {
    dispatch(actionDispatch(LOGGEDIN_SUCCESS));
  } else dispatch(actionDispatch(LOGGEDIN_FAILURE, "Incorrect Credentials"));
};
