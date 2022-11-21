export const cls = (...classNames: string[]) => {
  return classNames.join(" ");
};
export const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem("hot-place-user-token", token)
}
export const getTokenInLocalStorage = () => {
  return localStorage.getItem("hot-place-user-token")
}
export const setUser = (userInfo: any) => {
  return {
    email: userInfo.email,
    username: userInfo.email,
    avatar: userInfo.avatar,
    phone: userInfo.phone
  }
}