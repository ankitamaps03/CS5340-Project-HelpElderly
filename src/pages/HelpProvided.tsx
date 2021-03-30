import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonItemDivider,
    IonLabel,
    IonPage,
    IonRow
} from "@ionic/react";
import React from "react";
import {chatbubble, hammer, newspaperSharp, pin, timerOutline} from "ionicons/icons";
import ButtonForHome from "../components/ButtonForHome";
import TopPageHeader from "../components/TopPageHeader";
import ButtonForBack from "../components/ButtonForBack";
import Header from "../components/Header";
// @ts-ignore
import ReactStars from "react-rating-stars-component";


const HelpProvided: React.FC = () => {
    return (
        <IonPage>
            <TopPageHeader isLogin={true}/>

            <IonContent>
                <ButtonForBack/>
                <ButtonForHome/>
                <Header name={"View Help Details"} icon={newspaperSharp}/>
                <IonCard style={{height: "100%"}}>
                    <IonCardHeader>
                        <IonIcon icon={pin} slot="start"/>
                        <IonCardHeader><strong>Bob Marley </strong> helped you with your groceries. </IonCardHeader>

                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3">
                                    <IonAvatar>
                                        <img
                                            src="https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png"/>
                                    </IonAvatar>
                                </IonCol>
                                <IonCol>
                                    <ReactStars
                                        count={5}
                                        value={4}
                                        edit={false}
                                        size={40}
                                        activeColor="#ffd700"
                                    />
                                </IonCol>

                            <IonCol>
                                <IonItemDivider>
                                    <IonLabel style={{marginRight: "7px"}}>
                                        <IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
                                                 icon={hammer}/>
                                    </IonLabel>
                                    <IonLabel>
                                        <strong>Help Requested:</strong> Grocery Pick-up
                                    </IonLabel>
                                </IonItemDivider>
                                <IonItemDivider>
                                    <IonLabel style={{marginRight: "7px"}}>
                                        <IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
                                                 icon={timerOutline}/>
                                    </IonLabel>
                                    <IonLabel>
                                        <strong> When:</strong>30th March 2021, 03:00PM (EST)
                                    </IonLabel>
                                </IonItemDivider>
                                <IonItemDivider>
                                    <div style={{marginRight: "4px"}}>
                                        <IonIcon style={{color: '', fontSize: '20px', marginTop: '2px'}}
                                                 icon={chatbubble}/>
                                    </div>
                                    <div>
                                        <strong>Comments:</strong> Pick up one gallon of milk and a dozed bananas.
                                        Address is Star
                                        Market, 1330 Boylston St, Boston MA. Call me if you any information.
                                    </div>
                                </IonItemDivider>
                            </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default HelpProvided;
