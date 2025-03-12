import { toast } from "react-toastify";

export const handleSuccesss = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}