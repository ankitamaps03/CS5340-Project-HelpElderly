import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow
} from "@ionic/react";
import './RequestHelp.css';
import {listCircleSharp} from "ionicons/icons";
import Header from "../components/Header";
import TopPageHeader from "../components/TopPageHeader";
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";


const ViewHistoryElderly: React.FC = () => {

    let history = useHistory();
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
            <TopPageHeader isLogin={true} showViewHistory={false}/>
            <IonContent>
                <ButtonForBack/>
                <ButtonForHome/>
                <Header name={"View history for requested help"} icon={listCircleSharp}/>
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar>
                                    <img
                                        src="https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent>
                                    <strong>Bob Marley</strong> helped you with groceries on 29th March 2021, 03:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent>
                                    You rated the help with 4 stars.
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/helpProvided')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/requestHelp/1/groceries')}>
                            Request Help Again
                        </IonButton>
                    </div>
                </IonCard>

                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar>
                                    <img
                                        src="https://cdn3.vectorstock.com/i/1000x1000/71/87/male-avatar-profile-icon-round-man-face-vector-18307187.jpg"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent>
                                    Diana Prince helped you with technology related work on 23th March 2021, 12:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent>
                                    You have not rated this help.
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/helpProvided')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/requestHelp/1/groceries')}>
                            Request Help Again
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/addRatingElderlyWoman')}>
                            Rate
                        </IonButton>
                    </div>
                </IonCard>
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar>
                                    <img
                                        src="https://c8.alamy.com/comp/2ATH5M7/colourful-male-face-circle-in-flat-style-cartoon-vector-icon-modern-design-men-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH5M7.jpg"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent>
                                    Tony Stark helped you with technology related work on 23th March 2021, 12:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent>
                                    You rated the help with 5 stars.
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/helpProvided')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary">
                            Request Help Again
                        </IonButton>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
        )
}

export default ViewHistoryElderly;
