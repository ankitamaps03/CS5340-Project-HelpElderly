import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
    let history = useHistory();
    return (<IonPage>
        <IonHeader>
            <IonToolbar color="head">
                <IonTitle>Login to Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonButton
                color="primary"
                onClick={() => history.goBack()}
            >
                Go back
            </IonButton>
            <div className="container">
                <IonButton
                    color="primary"
                   >
                    Login
                </IonButton>
                <br/>
                <br/>
                <IonButton color="primary">Create an Account</IonButton>
            </div>

        </IonContent>
    </IonPage>)
}

export default Login;
