import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import {useHistory} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {logIn} from "ionicons/icons";
import Header from "../components/Header";

const LoginAccount: React.FC = () => {
    let history = useHistory();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Login to Help Elderly</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonButton
                    color="primary"
                    onClick={() => history.goBack()}
                >
                    Go back
                </IonButton>
                <Header name={'Login'} icon={logIn} />
                <div style={{top: "51%"}} className="container">
                    <LoginForm />
                </div>

            </IonContent>
        </IonPage>)
}

export default LoginAccount;
