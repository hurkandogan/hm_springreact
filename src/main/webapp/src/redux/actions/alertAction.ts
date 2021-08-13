import Alert from "../../components/types/Alert";

export const showAlertAction = (
    msg: string,
    alertType: string
) => (dispatch: any) => {
    dispatch({
        msg: msg,
        alertType: alertType,
        type: "SHOW_ALERT",
        show: true
    } as Alert );
}

export const hideAlertAction = () => (dispatch: any) => {
    dispatch({
        type: "HIDE_ALERT"
        }) as Alert;
}