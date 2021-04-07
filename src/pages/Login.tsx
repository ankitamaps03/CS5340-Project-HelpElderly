import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent, IonGrid,
    IonHeader, IonImg,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import './Login.css';
import {useHistory, useParams} from "react-router-dom";
import Header from "../components/Header";
import {logIn} from "ionicons/icons";
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";
import React from "react";

const Login: React.FC = () => {
    let history = useHistory();
    let params = {
        name: ''
    }
    params = useParams();
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
                <IonGrid>
                    <IonRow>
                        <IonCol size="6">
                            <IonCard mode="md" className="homeCard">
                                <IonCardHeader>
                                    <IonCardTitle>Login if you already hav an account.</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <div>
                                        <IonImg
                                            style={{width: "35%", display: "inline-block", marginBottom: "10px"}}
                                            src="https://cdn0.iconfinder.com/data/icons/interface-icons-rounded/110/Login-512.png"/>
                                    </div>
                                    <IonButton
                                        color="primary"
                                        onClick={() => history.push(`/loginAccount/${params.name}`)}
                                    >
                                        Login
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>

                        </IonCol>
                        <IonCol>
                            <IonCard mode="md" className="homeCard">
                                <IonCardHeader>
                                    <IonCardTitle>Create an account if you do not have an account.</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <div>
                                        <IonImg
                                            style={{width: "35%", display: "inline-block", marginBottom: "10px"}}
                                            src="https://www.iconbunny.com/icons/media/catalog/product/1/6/164.9-register-icon-iconbunny.jpg"/>
                                    </div>
                                    <IonButton color="primary"
                                               onClick={() => history.push('/createAccount')}
                                    >
                                        Create an Account
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <br/>
                <br/>

            </div>

        </IonContent>
    </IonPage>)
}

export default Login;
