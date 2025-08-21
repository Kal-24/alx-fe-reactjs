export const login = () => localStorage.setItem("auth", "true");
export const logout = () => localStorage.removeItem("auth");

export const useAuth = () => {
  const isLoggedIn = localStorage.getItem("auth") === "true";
  return { isAuthenticated: isLoggedIn };
};
