import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './RequestHelp.css';
import RequestHelpForm from "../components/RequestHelpForm";
import HelperDetails from "../components/HelperDetails";
import Header from "../components/Header";
import {helpBuoy} from "ionicons/icons";
import TopPageHeader from "../components/TopPageHeader";
import {useParams} from "react-router-dom";
import React from "react";
import ButtonForHome from "../components/ButtonForHome";

const ViewHelpDetails: React.FC = () => {
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
            <TopPageHeader isLogin={isLogin} />

            <IonContent>
                <ButtonForHome />
                <Header name={"View Helper Details"} icon={helpBuoy} />
                <HelperDetails />
            </IonContent>
        </IonPage>)
}

export default ViewHelpDetails;
