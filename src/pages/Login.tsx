import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import {useHistory, useParams} from "react-router-dom";
import Header from "../components/Header";
import {logIn} from "ionicons/icons";
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";

const Login: React.FC = () => {
    let history = useHistory();
    let params = {
        name: ''
    }
    params = useParams();
    console.log({params})
    return (<IonPage>
        <IonHeader>
            <IonToolbar color="head">
                <IonTitle>Login to Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <ButtonForBack />
            <ButtonForHome />
            <div className="container">
                <IonButton
                    color="primary"
                onClick={() => history.push(`/loginAccount/${params.name}`)}
                >
                    Login
                </IonButton>
                <br/>
                <br/>
                <IonButton color="primary"
                           onClick={() => history.push('/createAccount')}
                >
                    Create an Account
                </IonButton>
            </div>

        </IonContent>
    </IonPage>)
}

export default Login;
