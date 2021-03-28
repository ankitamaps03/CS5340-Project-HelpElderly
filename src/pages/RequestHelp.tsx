import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import './RequestHelp.css';
import RequestHelpForm from "../components/RequestHelpForm";
import {colorWand} from "ionicons/icons";
import Header from "../components/Header";


const RequestHelp: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Help Elderly - Request for Help</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <Header name="Request for help" icon={colorWand} />
                <RequestHelpForm/>
            </IonContent>
        </IonPage>)
}

export default RequestHelp;
