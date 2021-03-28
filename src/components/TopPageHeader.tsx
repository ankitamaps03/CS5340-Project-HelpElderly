import {IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import {helpCircle, personCircle} from "ionicons/icons";
import React from "react";

type TopPageHeaderProps = {
    isLogin : boolean
}
const TopPageHeader = ({isLogin}: TopPageHeaderProps) => {
    return (
        <IonHeader>
            <IonToolbar color="head">
                {isLogin && <IonButtons slot="secondary">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircle}/>
                    </IonButton>
                    Alice Murray
                </IonButtons>}
                <IonButtons slot="primary">
                    <IonButton fill="solid" color="secondary">
                        Help
                        <IonIcon slot="end" icon={helpCircle}/>
                    </IonButton>
                </IonButtons>
                <IonTitle>Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>)
}

export default TopPageHeader
