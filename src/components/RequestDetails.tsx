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
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import './RequestHelpForm.css';
import React, {useState} from "react";
import {checkmarkCircle, pin, star, time, chatbubble, helpBuoySharp, helpOutline, helpSharp, timeOutline, timerSharp, timerOutline} from "ionicons/icons";

const RequestDetails: React.FC = () => {
  const [location, setLocation] = useState<string>('1191 Boylston St, Boston MA 02215');
  const [typeOfHelp, setTypeOfHelp] = useState<string>();
  const [comments, setComments] = useState<string>();
  const [when] = useState<string>((new Date()).toString());

  return (
<IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Help Elderly - Request Details</IonTitle>
                </IonToolbar>
            </IonHeader>
      <IonContent>
          <IonCard>
              <IonCardHeader>
                  <IonIcon icon={pin} slot="start"/>
                  <IonCardSubtitle>Meet Alice Hyatt at 1191 Boylston St, Boston MA 02215</IonCardSubtitle>
                  
              </IonCardHeader>

              <IonCardContent>
                  <IonGrid>
                      <IonRow>
                          <IonCol size="2">
                              <IonAvatar>
                                  <img
                                      src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/006/242/original/old-woman.png"/>
                              </IonAvatar>
                              <IonButton
                                  color="secondary">
                                 Call 
                              </IonButton>
                              <IonButton
                                  color="secondary">
                                 Start Helping 
                              </IonButton>
                          </IonCol>
                          <IonCol>
                              <div><IonIcon style={{color: 'green', fontSize: '20px', marginTop: '2px'}}
  icon={helpSharp}/>
                                  Help Requested: Grocery Pick-up
                              </div>
                              <div><IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
  icon={timerOutline}/>
                                   When: Apr 1, 1:45 PM.
                              </div>
                              <div>
                                   Comments: Pick up one gallon of milk and a dozed bananas. Address is Star Market, 1330 Boylston St, Boston MA. Call me if you any information
                              </div>
                          </IonCol>
                      </IonRow>
                      
                  </IonGrid>
              </IonCardContent>
          </IonCard>
      </IonContent>
      </IonPage>
  )
}

export default RequestDetails;
