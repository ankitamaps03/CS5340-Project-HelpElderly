import {IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import {listCircle, personCircle} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";

type TopPageHeaderProps = {
    isLogin : boolean
}
const TopPageHeader = ({isLogin}: TopPageHeaderProps) => {

    const history = useHistory();
    const redirectToLogin = () => {
        history.push('/loginAccount/DirectLogin')
    }

    const redirectToHistory = () => {
        history.push('/viewHistoryElderly')
    }

    return (
        <IonHeader>
            <IonToolbar color="head">
                { isLogin
                && <IonButtons slot="secondary">
                    <IonButton
                        fill="solid"
                        color="secondary"
                    onClick={redirectToHistory}>
                        View History
                        <IonIcon slot="end" icon={listCircle}/>
                    </IonButton>
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircle}/>
                    </IonButton>
                    Alice Murray
                </IonButtons>}
                <IonButtons slot="primary">
                    {!isLogin &&
                    <IonButton
                        fill="solid"
                        color="secondary"
                        onClick={redirectToLogin}
                    >
                        Login
                    </IonButton>
                    }
                    {/*<IonButton fill="solid" color="secondary">
                        Help
                        <IonIcon slot="end" icon={helpCircle}/>
                    </IonButton>*/}

                </IonButtons>
                <IonTitle>Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>)
}

export default TopPageHeader
