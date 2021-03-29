import {IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import {home, listCircle, personCircle} from "ionicons/icons";
import React from "react";
import {useHistory} from "react-router-dom";
import ButtonForHistory from "./ButtonForHistory";

type TopPageHeaderProps = {
    isLogin : boolean,
    showLogin?: boolean
}
const TopPageHeader = ({isLogin, showLogin = true}: TopPageHeaderProps) => {

    const history = useHistory();
    const redirectToLogin = () => {
        history.push('/loginAccount/DirectLogin')
    }



    return (
        <IonHeader>
            <IonToolbar color="head">

                <IonButtons slot="secondary">
                    {
                        isLogin
                        &&
                        <div>
                            <ButtonForHistory />
                            <IonButton>
                                <IonIcon slot="icon-only" icon={personCircle}/>
                            </IonButton>
                            Alice Murray
                        </div>}
                </IonButtons>
                <IonButtons slot="primary">
                    { showLogin && !isLogin &&
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
                <IonTitle onClick={() => history.push("/1")}>Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>)
}

export default TopPageHeader
