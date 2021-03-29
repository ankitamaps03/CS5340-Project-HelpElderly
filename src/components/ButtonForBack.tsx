import {IonButton, IonIcon} from "@ionic/react";
import {arrowBack} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";

const ButtonForBack = () => {
    const history = useHistory();
    const redirectToHome = () => {
        history.push('/1')
    }
    return (
        <IonButton
            fill="solid"
            color="secondary"
            onClick={() => history.goBack()}
        >
            Go back
            <IonIcon slot="end" icon={arrowBack}/>
        </IonButton>)
}

export default ButtonForBack;
