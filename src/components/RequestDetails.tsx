import {
    IonAvatar, IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonPage,
    IonRow
} from "@ionic/react";
import './RequestHelpForm.css';
import React from "react";
import {helpSharp, newspaperSharp, pin, timerOutline} from "ionicons/icons";
import TopPageHeader from "./TopPageHeader";
import Header from "./Header";
import ButtonForBack from "./ButtonForBack";
import ButtonForHome from "./ButtonForHome";

const RequestDetails: React.FC = () => {
    return (
        <IonPage>
            <TopPageHeader isLogin={true} />

            <IonContent>
                <ButtonForBack />
                <ButtonForHome />
                <Header name={"View Help Details"} icon={newspaperSharp} />
                <IonCard style={{height: "100%"}}>
                    <IonCardHeader>
                        <IonIcon icon={pin} slot="start"/>
                        <IonCardHeader>Meet Alice Hyatt at 1191 Boylston St, Boston MA 02215</IonCardHeader>

                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3">
                                    <IonAvatar>
                                        <img
                                            src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/006/242/original/old-woman.png"/>
                                    </IonAvatar>
                                </IonCol>
                                <IonCol>
                                    <div>
                                        <IonIcon
                                            style={{color: 'green', fontSize: '20px', marginTop: '2px'}}
                                            icon={helpSharp}/>
                                        Help Requested: Grocery Pick-up
                                    </div>
                                    <div>
                                        <IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
                                                 icon={timerOutline}/>
                                        When: Apr 1, 1:45 PM.
                                    </div>
                                    <div>
                                        Comments: Pick up one gallon of milk and a dozed bananas. Address is Star
                                        Market, 1330 Boylston St, Boston MA. Call me if you any information
                                    </div>
                                </IonCol>
                      </IonRow>
                            <IonRow>
                                <IonButton
                                    color="secondary">
                                    Call
                                </IonButton>
                                <IonButton
                                    color="secondary">
                                    Start Helping
                                </IonButton>
                            </IonRow>

                        </IonGrid>
              </IonCardContent>
          </IonCard>
      </IonContent>
      </IonPage>
  )
}

export default RequestDetails;
