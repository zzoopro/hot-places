const popReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case "show":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default popReducer;
