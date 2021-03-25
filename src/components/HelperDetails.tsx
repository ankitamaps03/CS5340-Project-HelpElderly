import {
    IonAvatar, IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonRow
} from "@ionic/react";
import './RequestHelpForm.css';
import React, {useState} from "react";
import {checkmarkCircle, pin, star, time, chatbubble} from "ionicons/icons";

const HelperDetails: React.FC = () => {
    const [location, setLocation] = useState<string>('1191 Boylston St, Boston MA 02215');
    const [typeOfHelp, setTypeOfHelp] = useState<string>();
    const [comments, setComments] = useState<string>();
    const [when] = useState<string>((new Date()).toString());

    return (

        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonIcon icon={pin} slot="start"/>
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
                                <IonButton
                                    color="secondary">
                                   Call Helper
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <div><IonIcon style={{color: 'green', fontSize: '20px', marginTop: '2px'}}
    icon={checkmarkCircle}/>
                                    Bob Marley is covid negative.
                                </div>
                                <div><IonIcon style={{color: 'yellow', fontSize: '20px', marginTop: '2px'}}
    icon={star}/>
                                    Bob Marley has a 4.7 star rating.
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <div><IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
    icon={time}/>
                                Estimates time is 30 minutes.
                            </div>
                        </IonRow>
                        <IonRow>
                            <div><IonIcon style={{color: '', fontSize: '20px', marginTop: '2px'}}
                                          icon={chatbubble}/>
                               Your comments: Pick up one gallon of milk and a dozed bananas. Address is Star Market, 1330 Boylston St, Boston MA. Call me if you any information.
                            </div>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </IonContent>
    )
}

export default HelperDetails;
