import {IonContent, IonPage} from "@ionic/react";
import './Login.css';
import {useHistory} from "react-router-dom";
import CreateForm from "../components/CreateForm";
import ButtonForBack from "../components/ButtonForBack"
import TopPageHeader from "../components/TopPageHeader";
import Header from "../components/Header";
import {personCircle} from "ionicons/icons";
import ButtonForHome from "../components/ButtonForHome";

const LoginAccount: React.FC = () => {
    let history = useHistory();
    return (
        <IonPage>
            <TopPageHeader isLogin={false}/>
            <IonContent>
                <ButtonForBack/>
                <ButtonForHome/>
                <Header name={"Create Account"} icon={personCircle}/>
                <CreateForm/>
            </IonContent>
        </IonPage>)
}

export default LoginAccount;
