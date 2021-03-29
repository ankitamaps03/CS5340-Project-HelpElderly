import {IonButton, IonIcon} from "@ionic/react";
import {listCircle} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";


const ButtonForHistory = () => {
    let history = useHistory();
    const redirectToHistory = () => {
        history.push('/viewHistoryElderly')
    }
    return(<IonButton
        fill="solid"
        color="secondary"
        onClick={redirectToHistory}>
        View History
        <IonIcon slot="end" icon={listCircle}/>
    </IonButton>)
}

export default ButtonForHistory;
