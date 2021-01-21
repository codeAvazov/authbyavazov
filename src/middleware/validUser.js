import { toast } from "react-toastify";

export const validUser = ({ email, password }) => {
  if (!email || !password) {
    toast.warning("Please enter all fields !!!");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    toast.warning("Email must be contains @ and .");
    return false;
  }

  if (password.length < 6) {
    toast.warning("Password length must be more than 6 characters !!!");
    return false;
  }

  return true;
};
