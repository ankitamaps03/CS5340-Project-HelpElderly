import {IonContent, IonPage} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './Home.css';
import {useParams} from "react-router-dom";
import React from "react";
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
    return (
        <IonPage>
            <TopPageHeader isLogin={isLogin}/>
            <IonContent>
                <HomeButtons/>
            </IonContent>
        </IonPage>)
}

export default Home;
