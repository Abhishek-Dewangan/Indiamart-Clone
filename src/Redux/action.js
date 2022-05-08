import { FILTER, FSUCCESS, LSUCCESS } from "./actionTypes";

export const getDataF = (payload) => {
  return {
    type: FSUCCESS,
    payload,
  };
};

export const getDataL = (payload) => {
  return {
    type: LSUCCESS,
    payload,
  };
};

export const filterData = (payload) => {
  return {
    type: FILTER,
    payload,
  };
};
