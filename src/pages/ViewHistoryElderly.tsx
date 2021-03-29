import {
    IonAvatar, IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle, IonCol,
    IonContent,
    IonGrid, IonHeader,
    IonIcon,
    IonPage, IonRow, IonTitle, IonToolbar
} from "@ionic/react";
import './RequestHelp.css';
import RequestHelpForm from "../components/RequestHelpForm";
import {colorWand, helpSharp, pin, timerOutline} from "ionicons/icons";
import Header from "../components/Header";
import TopPageHeader from "../components/TopPageHeader";
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {listCircleSharp} from "ionicons/icons";


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
           <TopPageHeader isLogin={true} />
            <IonContent>
                <IonButton
                    color="primary"
                    onClick={() => history.goBack()}
                >
                    Go back
                </IonButton>
                <Header name={"View history"} icon={listCircleSharp} />
                <IonCard>
                    <IonCardContent>
                        Alice needs help picking up groceries at 1:45 PM on Apr 1.
                    </IonCardContent>
                    <div>
                        <IonButton fill="outline" slot="end" >View Request</IonButton>
                        <IonButton fill="outline" slot="end" >Accept Request</IonButton>
                        <IonButton fill="outline" slot="end">Decline Request</IonButton>
                    </div>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        Mary needs help with tech at 4 PM on Apr 5.
                    </IonCardContent>
                    <div>
                        <IonButton fill="outline" slot="end">View Request</IonButton>
                        <IonButton fill="outline" slot="end" >Accept Request</IonButton>
                        <IonButton fill="outline" slot="end">Decline Request</IonButton>
                    </div>

                </IonCard>
            </IonContent>
        </IonPage>
        )
}

export default ViewHistoryElderly;
