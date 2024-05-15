import toast from "react-hot-toast";

export const successPopup = (message) => toast.success(message);
export const errorPopup = (message) =>
  toast.error(message);
