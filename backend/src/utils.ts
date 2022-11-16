export const isEmpty = (any: any) => {
  if (!any) {
    return false;
  } else if (!any[0]) {
    return false;
  } else {
    return true;
  }
};
