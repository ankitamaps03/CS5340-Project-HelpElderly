import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './Login.css';
import {useHistory} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {logIn} from "ionicons/icons";
import Header from "../components/Header";
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";
import TopPageHeader from "../components/TopPageHeader";

const LoginAccount: React.FC = () => {

    return (
        <IonPage>
           <TopPageHeader isLogin={false} showLogin={false} />
            <IonContent>
                <ButtonForBack />
                <ButtonForHome />
                <Header name={'Login'} icon={logIn} />
                <div style={{top: "51%"}} className="container">
                    <LoginForm />
                </div>
            </IonContent>
        </IonPage>)
}

export default LoginAccount;
