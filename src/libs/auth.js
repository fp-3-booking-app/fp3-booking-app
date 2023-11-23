import { useSelector } from "react-redux";

const dummyEmail = "user@gmail.com";
const dummyPassword = "password123";

export default useAuth = () => {
  const handleLogin = (email, password) => {
    return dummyEmail === email && dummyPassword === password;
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return {
    handleLogin,
    isAuthenticated,
  };
};
