import { toast } from "react-toastify";
export const notifySuccess = (message: string) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success",
  });

export const notifyError = (message: string) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error",
  });
