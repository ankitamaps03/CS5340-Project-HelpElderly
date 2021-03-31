import {IonButton, IonIcon} from "@ionic/react";
import {listCircle} from "ionicons/icons";
import React from "react";
import {useHistory, useParams} from "react-router-dom";


const ButtonForHistory = () => {
    let history = useHistory();
    let params = {
        id: ''
    }
    params = useParams();

    const redirectToHistory = () => {
        if (params.id == '1') {
            history.push('/viewHistoryElderly')
        }
        else if (params.id == '2')
        {
            history.push('/viewHistoryHelper')
        }
        else {
            history.push('/viewHistoryElderly')
        }

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
