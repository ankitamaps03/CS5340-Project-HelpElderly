import {IonContent, IonImg, IonPage} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './Home.css';
import {useParams} from "react-router-dom";
import React from "react";
import TopPageHeader from "../components/TopPageHeader";
import logo from '../images/help_elderly_logo.png';

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
                <div style={{width: "15%", margin: "0 auto"}}>
                    <IonImg style={{width: "160px", height: "160px"}} src={logo}/>
                </div>
                <HomeButtons/>
            </IonContent>
        </IonPage>)
}

export default Home;
