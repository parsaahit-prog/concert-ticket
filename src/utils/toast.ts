import { toast } from "react-toastify";

export const showSuccessToast = (message: string, onClick?: () => void) => {
  toast.success(message, {
    position: "top-center",
    theme: "colored",
    onClick,
  });
};

export const showErrorToast = (message: string, onClick?: () => void) => {
  toast.error(message, {
    position: "top-center",
    theme: "colored",
    onClick,
  });
};

export const showInfoToast = (message: string, onClick?: () => void) => {
  toast.info(message, {
    position: "top-center",
    theme: "colored",
    onClick,
  });
};
