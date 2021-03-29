import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import TopPageHeader from "./TopPageHeader";
import Header from "./Header";
import {book} from "ionicons/icons";

export const ViewRequest: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <TopPageHeader isLogin={true} />
      <IonContent>
        <Header name={"View Requests"} icon={book} />
        <IonCard>
          <IonCardContent>
            Alice needs help picking up groceries at 1:45 PM on Apr 1.
        </IonCardContent>
        <div>
          <IonButton fill="outline" slot="end" onClick={() =>history.push('/requestDetails')}>View Request</IonButton>
          <IonButton fill="outline" slot="end" onClick={() =>history.push('/requestDetails')}>Accept Request</IonButton>
          <IonButton fill="outline" slot="end">Decline Request</IonButton>
        </div>
        </IonCard>
        <IonCard>
          <IonCardContent>
            Mary needs help with tech at 4 PM on Apr 5.
        </IonCardContent>
        <div>
          <IonButton fill="outline" slot="end" onClick={() =>history.push('/requestDetails')}>View Request</IonButton>
          <IonButton fill="outline" slot="end" onClick={() =>history.push('/requestDetails')}>Accept Request</IonButton>
          <IonButton fill="outline" slot="end">Decline Request</IonButton>
        </div>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ViewRequest;
