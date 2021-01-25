import { toast } from "react-toastify";

export const validateEditDataUser = (obj, choose) => {
  if (choose === 1) {
    const { email, name } = obj;

    if (!email || !name) {
      toast.warning("Please enter all fields !!!");
      return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.warning("Email must be contains @ and .");
      return false;
    }
  }

  if (choose === 2) {
    const { password, confirmPassword, oldPassword } = obj;

    if (!password || !confirmPassword || !oldPassword) {
      toast.warning("Please enter all fields !!!");
      return false;
    }

    if (oldPassword.length < 6) {
      toast.warning("Old password length must be more than 6 characters !!!");
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
  }

  return true;
};
