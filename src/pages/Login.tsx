import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import {logIn} from "ionicons/icons";

const Login: React.FC = () => {
    let history = useHistory();
    return (<IonPage>
        <IonHeader>
            <IonToolbar color="head">
                <IonTitle>Login to Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonButton
                color="primary"
                onClick={() => history.goBack()}
            >
                Go back
            </IonButton>
            <div className="container">
                <IonButton
                    color="primary"
                onClick={() => history.push('loginAccount')}
                >
                    Login
                </IonButton>
                <br/>
                <br/>
                <IonButton color="primary"
                           onClick={() => history.push('createAccount')}
                >
                    Create an Account
                </IonButton>
            </div>

        </IonContent>
    </IonPage>)
}

export default Login;
