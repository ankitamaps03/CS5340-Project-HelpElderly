import {
    IonAvatar, IonButton, IonButtons,
    IonChip,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonLabel,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './Home.css';
import {useParams} from "react-router-dom";
import {personCircle, search, helpCircle} from "ionicons/icons";
import React, {useState} from "react";
import TopPageHeader from "../components/TopPageHeader";

const Home: React.FC = () => {
    let params = {
        id: ''
    }
    params = useParams();
    let isLogin = false;
    if (params.id) {
        isLogin = true;
    }
    return (<IonPage>
        <TopPageHeader isLogin={isLogin} />
        <IonContent fullscreen>
            <HomeButtons />
        </IonContent>
    </IonPage>)
}

export default Home;
