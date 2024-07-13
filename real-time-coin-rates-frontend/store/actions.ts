export const SET_SYMBOL = 'SET_SYMBOL';
export const SET_DATA = 'SET_DATA';

export const setSymbol = (symbol: string) => ({
  type: SET_SYMBOL,
  payload: symbol,
});

export const setData = (symbol: string, data: any[]) => ({
  type: SET_DATA,
  payload: { symbol, data },
});
