import Alert from "../../components/types/Alert";

export const showAlertAction = (
    msg: string,
    alertType: string,
    show: boolean
) => (dispatch: any) => {
    dispatch({
        msg: msg,
        alertType: alertType,
        type: "SHOW_ALERT",
        show: show
    } as Alert );
}

export const hideAlertAction = () => (dispatch: any) => {
    dispatch({
        type: "HIDE_ALERT"
        }) as Alert;
}