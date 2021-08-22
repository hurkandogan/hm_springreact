import Alert from "../../types/Alert";

const INITIAL_STATE: Alert = {
    msg: "",
    alertType: "",
    show: false
}

export const alertReducer = (state: Alert = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "SHOW_ALERT":
            return {
                msg: action.msg,
                alertType: action.alertType,
                show: true
            };
        case "HIDE_ALERT":
            return INITIAL_STATE;
        default: return state;
    }
}