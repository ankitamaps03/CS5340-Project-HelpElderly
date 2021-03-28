import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonItemDivider,
    IonLabel,
    IonRow
} from "@ionic/react";
import './RequestHelpForm.css';
import React, {useEffect, useState} from "react";
import {chatbubble, checkmarkCircle, star, time} from "ionicons/icons";
import {useHistory} from "react-router-dom";
import Modal from "./Modal";

const HelperDetails: React.FC = () => {


    let history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const redirectToRating = () => {
        setShowModal(false)
        history.push('/AddRatingElderly/1')
    }

    const redirectToHome = () => {
        setShowModal(false)
        history.push('/1')
    }

    useEffect(() => {
        let timer =  setTimeout(() => {
            setShowModal(true);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Bob Marley is on his way to 1191 Boylston St, Boston MA 02215</IonCardSubtitle>
                    <IonCardTitle>"Bob Marley" is your assigned help</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="2">
                                <IonAvatar>
                                    <img
                                        src="https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png"/>
                                </IonAvatar>
                                <br/>
                                <IonButton
                                    color="secondary">
                                    Call Helper
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <div><IonIcon
                                    style={{color: 'green', fontSize: '20px', marginTop: '2px'}}
                                    icon={checkmarkCircle}/>
                                    Bob Marley is covid negative.
                                </div>
                                <div>
                                    <IonIcon
                                        style={{color: 'yellow', fontSize: '20px', marginTop: '2px'}}
                                        icon={star}/>
                                    Bob Marley has a 4.7 star rating.
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCardContent style={{width: "100%"}}>


                                <IonItemDivider>
                                    <IonLabel style={{marginRight: "7px"}}>
                                        <IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
                                                 icon={time}/>
                                    </IonLabel>
                                    <IonLabel>
                                        Estimated time is 30 minutes.
                                    </IonLabel>
                                </IonItemDivider>
                            </IonCardContent>
                        </IonRow>
                        <IonRow>
                            <IonCardContent>
                                <IonItemDivider>
                                    <div style={{marginRight: "4px"}}>
                                        <IonIcon style={{color: '', fontSize: '20px', marginTop: '2px'}}
                                                 icon={chatbubble}/>
                                    </div>
                                    <div>
                                        Your comments: Pick up one gallon of milk and a dozed bananas. Address is Star
                                        Market, 1330 Boylston St, Boston MA. Call me if you any information.
                                    </div>
                                </IonItemDivider>
                            </IonCardContent>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <Modal showModal={showModal}
                   yesAction={redirectToRating}
                   noAction={redirectToHome}
                   closeModal={() => setShowModal(false)}
                   bodyText="Bob Marley finished helping you. Do you want to rate the help provided by Bob Marley?"
            />
        </IonContent>
    )
}

export default HelperDetails;
