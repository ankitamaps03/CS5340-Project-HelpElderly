import {IonButton, IonButtons, IonHeader, IonIcon, IonLabel, IonPopover, IonTitle, IonToolbar} from "@ionic/react";
import {personCircle} from "ionicons/icons";
import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import ButtonForHistory from "./ButtonForHistory";

type TopPageHeaderProps = {
    isLogin: boolean,
    showLogin?: boolean,
    showViewHistory?: boolean
}
const TopPageHeader = ({isLogin, showLogin = true, showViewHistory = true}: TopPageHeaderProps) => {

    const history = useHistory();
    const [popoverState, setShowPopover] = useState({showPopover: false, event: undefined});

    const redirectToLogin = () => {
        history.push('/loginAccount/DirectLogin')
    }

    const logout = (event: any) => {
        setShowPopover({showPopover: false, event: event});
        history.push('/')
        window.location.reload();
    }


    return (
        <IonHeader>
            <IonToolbar color="head">

                <IonButtons slot="secondary">
                    {
                        isLogin
                        &&
                        <div>
                            <IonPopover
                                cssClass='my-custom-class'
                                event={popoverState.event}
                                isOpen={popoverState.showPopover}
                                onDidDismiss={() => setShowPopover({showPopover: false, event: undefined})}
                            >
                                <IonButton
                                    style={{width: "100%"}}
                                    onClick={(e : any) => {logout(e)}}>
                                    Logout
                                </IonButton>
                            </IonPopover>
                            {showViewHistory && <ButtonForHistory/>}
                            <IonButton
                                onClick={
                                    (e: any) => {
                                        e.persist();
                                        setShowPopover({showPopover: true, event: e})
                                    }}>
                                <IonIcon slot="icon-only" icon={personCircle}/>
                            </IonButton>
                            <IonLabel
                                onClick={
                                    (e: any) => {
                                        e.persist();
                                        setShowPopover({showPopover: true, event: e})
                                    }}>
                                Alice Murray
                            </IonLabel>
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
