import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router';
import HomeButtons from '../components/HomeButtons';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Help Elderly</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>

        <HomeButtons />

      </IonContent>
    </IonPage>
  );
};

export default Page;
