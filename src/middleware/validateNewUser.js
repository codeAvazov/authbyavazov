import { toast } from "react-toastify";

export const validateNewUser = ({ email, name, password, confirmPassword }) => {
  if (!email || !password || !name || !confirmPassword) {
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

  if (password !== confirmPassword) {
    toast.warning("Confirm password must equal password !!!");
    return false;
  }

  return true;
};
