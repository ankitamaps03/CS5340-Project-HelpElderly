import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import {useHistory} from "react-router-dom";
import CreateForm from "../components/CreateForm";
import ButtonForBack from "../components/ButtonForBack"

const LoginAccount: React.FC = () => {
    let history = useHistory();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Create an Account</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                    </IonToolbar>

                </IonHeader>

                <br/>
                <ButtonForBack />
                <br/>
                <div className="container">
                    <CreateForm />
                </div>

            </IonContent>
        </IonPage>)
}

export default LoginAccount;
