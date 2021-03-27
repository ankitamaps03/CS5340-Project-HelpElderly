import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const ViewRequest: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>View Requests</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        

        <IonCard>
          <IonCardContent>
            Alice needs help picking up groceries at 1:45 PM on Apr 1.
        </IonCardContent>
        <div>
          <IonButton fill="outline" slot="end">View Request</IonButton>
          <IonButton fill="outline" slot="end">Accept Request</IonButton>
          <IonButton fill="outline" slot="end">Decline Request</IonButton>
        </div>
        </IonCard>
        <IonCard>
          <IonCardContent>
            Mary needs help with tech at 4 PM on Apr 5.
        </IonCardContent>
        <div>
          <IonButton fill="outline" slot="end">View Request</IonButton>
          <IonButton fill="outline" slot="end">Accept Request</IonButton>
          <IonButton fill="outline" slot="end">Decline Request</IonButton>
        </div>
      
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ViewRequest;