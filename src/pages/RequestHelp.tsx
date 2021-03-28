import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './RequestHelp.css';
import RequestHelpForm from "../components/RequestHelpForm";
import {colorWand} from "ionicons/icons";
import Header from "../components/Header";
import TopPageHeader from "../components/TopPageHeader";
import React from "react";
import {useParams} from "react-router-dom";


const RequestHelp: React.FC = () => {

    let params = {
        id: ''
    }
    params = useParams();
    let isLogin = false;
    if (params.id) {
        isLogin = true;
    }

    return (
        <IonPage>
            <TopPageHeader isLogin={isLogin}/>

            <IonContent>
                <Header name="Request for help" icon={colorWand} />
                <RequestHelpForm/>
            </IonContent>
        </IonPage>)
}

export default RequestHelp;
