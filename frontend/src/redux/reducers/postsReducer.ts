const postsReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case "renewal":
      return [...action.payload];
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default postsReducer;
