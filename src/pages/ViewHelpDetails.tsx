import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import HomeButtons from "../components/HomeButtons";
import './RequestHelp.css';
import RequestHelpForm from "../components/RequestHelpForm";
import HelperDetails from "../components/HelperDetails";

const ViewHelpDetails: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Help Elderly - Helper Details</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader>
                    Helper Details
                </IonHeader>
                <HelperDetails />
            </IonContent>
        </IonPage>)
}

export default ViewHelpDetails;
