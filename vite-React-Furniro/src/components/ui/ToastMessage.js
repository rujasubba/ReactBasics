import { toast } from "react-toastify";


export const showToastMessage = ({message, position = 'top-right', type}) => {
    const messageToDisplay = message ?? 'Success'
    toast[type](messageToDisplay, {
        position: position
    });
}