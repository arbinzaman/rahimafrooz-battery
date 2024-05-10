import toast from "react-hot-toast";

export const successPopup = () => toast.success("Application submitted");
export const errorPopup = () =>
  toast.error("Something went wroung, Please try again!");
