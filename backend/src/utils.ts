export const isEmpty = (any: any) => {
  if (any !== 0 && !any) {
    return true;
  } else if (any.length === 0) {    
    return true
  } else {
    return false;
  }
};
