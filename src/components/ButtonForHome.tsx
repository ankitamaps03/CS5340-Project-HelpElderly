import {IonButton, IonIcon} from "@ionic/react";
import {home} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";

const ButtonForHome = () => {
    const history = useHistory();
    const redirectToHome = () => {
        history.push('/1')
    }
    return(<IonButton
        fill="solid"
        color="secondary"
        onClick={redirectToHome}>
        Home
        <IonIcon slot="end" icon={home}/>
    </IonButton>)
}

export default ButtonForHome;
