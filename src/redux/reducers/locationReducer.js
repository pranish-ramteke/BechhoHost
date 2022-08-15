import {
  SET_CURRENT_CITY_FROM_USER_AUTH,
  SET_CURRENT_CITY_BY_USER,
  RESET_CITY_ON_LOGOUT,
} from "../actions/types";
const initialState = {
  city: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CITY_FROM_USER_AUTH:
      return {
        ...state,
        city: action.payload,
      };
    case SET_CURRENT_CITY_BY_USER:
      if (action.payload === "Delhi") {
        return {
          ...state,
          city: "Delhi",
        };
      } else if (action.payload === "Noida") {
        return {
          ...state,
          city: "Noida",
        };
      } else if (action.payload === "Bangalore") {
        return {
          ...state,
          city: "Bangalore",
        };
      } else if (action.payload === "Gurugram") {
        return {
          ...state,
          city: "Gurugram",
        };
      } else if (action.payload === "Pune") {
        return {
          ...state,
          city: "Pune",
        };
      }
      break;
    case RESET_CITY_ON_LOGOUT:
      return {
        city: "",
      };
    default:
      return state;
  }
}
