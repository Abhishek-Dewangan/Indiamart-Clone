import { FILTER, FSUCCESS, LSUCCESS } from "./actionTypes";

const init = {
  fdata: {},
  ldata: {},
  products: [],
};
const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case FSUCCESS:
      return { ...state, fdata: payload };

    case LSUCCESS:
      return { ...state, ldata: payload };

    case FILTER:
      return {
        ...state,
        products: [
          ...state.fdata.filter((item) =>
            item.catgory === payload ? item : ""
          ),
        ],
      };

    default:
      return state;
  }
};

export { Reducer };
