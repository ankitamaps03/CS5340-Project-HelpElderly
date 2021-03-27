import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import {useHistory} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import CreateForm from "../components/CreateForm";

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
                <IonHeader collapse="condense">
                    <IonToolbar>
                    </IonToolbar>

                </IonHeader>

                <br/>
                <IonButton

                    color="primary"
                    onClick={() => history.goBack()}
                >
                    Go back
                </IonButton>
                <br/>
                <div className="container">
                    <CreateForm />
                </div>

            </IonContent>
        </IonPage>)
}

export default LoginAccount;
