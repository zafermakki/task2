export const loginUser = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      return "admin";
    }
  
    localStorage.setItem("role", "user");
    return "user";
  };
  
  export const getUserRole = () => {
    return localStorage.getItem("role");
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("role");
  };
  