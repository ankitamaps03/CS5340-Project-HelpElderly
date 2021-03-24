import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './Home.css';

const Home: React.FC = () => {

    return(<IonPage>
        <IonHeader>
            <IonToolbar color="head">
                <IonTitle>Help Elderly</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                </IonToolbar>
            </IonHeader>

            <HomeButtons name={'Hello Home'} />

        </IonContent>
    </IonPage>)
}

export default Home;
