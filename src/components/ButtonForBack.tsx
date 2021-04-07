import {IonButton, IonIcon, IonLabel} from "@ionic/react";
import {arrowBack} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";

const ButtonForBack = () => {
    const history = useHistory();

    return (
        <IonButton
            fill="solid"
            color="secondary"
            onClick={() => history.goBack()}
        >
            <IonIcon slot="start" icon={arrowBack}/>
            <IonLabel>Go back</IonLabel>

        </IonButton>)
}

export default ButtonForBack;
