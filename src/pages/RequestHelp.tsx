import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './RequestHelp.css';
import RequestHelpForm from "../components/RequestHelpForm";

const RequestHelp: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Help Elderly - Request for Help</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader>
                    Request for Help
                </IonHeader>
                <RequestHelpForm />
            </IonContent>
        </IonPage>)
}

export default RequestHelp;
