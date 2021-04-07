import {IonButton, IonIcon} from "@ionic/react";
import {call, home} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";

type ButtonForHomeProps = {
    callFrom?: string
}

const ButtonForHome = ({callFrom}: ButtonForHomeProps) => {
    const history = useHistory();
    const redirectToHome = () => {
        if (callFrom == "1") {
            history.push('/2')
        }
        else {
            history.push('/1')
        }
    }
    return(<IonButton
        fill="solid"
        color="secondary"
        onClick={redirectToHome}>
        Home
        <IonIcon slot="start" icon={home}/>
    </IonButton>)
}

export default ButtonForHome;
