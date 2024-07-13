import { SET_SYMBOL, SET_DATA } from './actions';

const initialState = {
  symbol: 'BTC',
  data: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SYMBOL:
      return { ...state, symbol: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default rootReducer;
