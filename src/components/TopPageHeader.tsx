import {
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonImg,
    IonLabel,
    IonPopover,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {personCircle, sunnyOutline} from "ionicons/icons";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import ButtonForHistory from "./ButtonForHistory";
import helpElderlyIcon from '../images/help_elderly_icon.png';

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

    const redirectToCreateAccount = () => {
        history.push('/createAccount')
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

                            <IonIcon slot="start" icon={personCircle}/>Alice Murray

                            </IonButton>
                            {/* <IonLabel
                                onClick={
                                    (e: any) => {
                                        e.persist();
                                        setShowPopover({showPopover: true, event: e})
                                    }}>
                                Alice Murray
                            </IonLabel> */}
                        </div>}
                </IonButtons>
                <IonButtons slot="primary">
                    {showLogin && !isLogin &&
                    <IonButton
                        fill="solid"
                        color="secondary"
                        onClick={redirectToLogin}
                    >
                        Login
                    </IonButton>

                    }
                    {showLogin && !isLogin &&
                    <IonButton
                        fill="solid"
                        color="secondary"
                        onClick={redirectToCreateAccount}
                    >
                        Create an account
                    </IonButton>

                    }
                    {/*<IonButton fill="solid" color="secondary">
                        Help
                        <IonIcon slot="end" icon={helpCircle}/>
                    </IonButton>*/}

                </IonButtons>

                <IonTitle onClick={() => history.push("/1")}>
                    <IonIcon
                        slot="start"
                        style={{fontSize: "30px"}}
                        icon={sunnyOutline}/>
                    <IonLabel>
                        <IonImg
                            style={{width: "120px", cursor: "pointer", background: "#e9dafd"}}
                            src={helpElderlyIcon}/>
                    </IonLabel>
                </IonTitle>
            </IonToolbar>
        </IonHeader>)
}

export default TopPageHeader
