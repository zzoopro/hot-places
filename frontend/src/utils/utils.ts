export const cls = (...classNames: string[]) => {
  return classNames.join(" ");
};
export const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem("hot-place-user-token", token);
};
export const removeTokenInLocalStorage = () => {
  localStorage.removeItem("hot-place-user-token");
};
export const getTokenInLocalStorage = () => {
  return localStorage.getItem("hot-place-user-token");
};
export const setUser = (userInfo: any) => {
  return {
    email: userInfo.email,
    username: userInfo.email,
    avatar: userInfo.avatar,
    phone: userInfo.phone,
  };
};
export const errorHandler = (error: any) => {
  switch (error.code) {
    case "ERR_BAD_REQUEST":
      window.location.href = `${process.env.PUBLIC_URL}/auth`;
      break;
  }
};
