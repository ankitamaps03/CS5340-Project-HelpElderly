import {
    IonButton,
    IonContent,
    IonDatetime,
    IonInput,
    IonItem,
    IonLabel,
    IonList, IonLoading,
    IonSelect,
    IonSelectOption,
    IonTextarea
} from "@ionic/react";
import './RequestHelpForm.css';
import {useState} from "react";
import {useHistory, useParams} from "react-router-dom";


const RequestHelpForm: React.FC = () => {
    let params = {
        id: ''
    }
    params = useParams();
    const [location, setLocation] = useState<string>('1191 Boylston St, Boston MA 02215');
    const [typeOfHelp, setTypeOfHelp] = useState<string>();
    const [comments, setComments] = useState<string>();
    const [when, setWhen] = useState<string>((new Date()).toString());
    let history = useHistory();
    const [showLoading, setShowLoading] = useState(false);

    const viewHelpDetails = () => {
        if (params) {
           if(params.id)
           {
               setShowLoading(true)
               setTimeout(() => {
                   setShowLoading(false);
                   history.push('/viewHelpDetails')
               }, 2000);
           }
           else {
               history.push('/login/RequestHelp')
           }
        }

    }
    return (

        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >Location *: </IonLabel>
                    <IonInput
                        placeholder="Enter your location."
                        value={location}
                        required
                        onIonChange={e => setLocation(e.detail.value!)}></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >Type of help *: </IonLabel>
                    <IonSelect placeholder="Enter the type of help."
                               value={typeOfHelp}
                               onIonChange={e => setTypeOfHelp(e.detail.value!)}>
                        <IonSelectOption value="groceryPickup">Grocery pickup</IonSelectOption>
                        <IonSelectOption value="dropMe">Drop me</IonSelectOption>
                        <IonSelectOption value="houseCleaning">House cleaning</IonSelectOption>
                        <IonSelectOption value="technicalHelp">Technical help</IonSelectOption>
                        <IonSelectOption value="others">Others</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >When *: </IonLabel>
                    <IonDatetime
                        placeholder="Enter the date and time for help."
                        displayFormat="D MMM YYYY H:mm"
                        min="1997"
                        max="2050" value={when}
                        onIonChange={e => setWhen(e.detail.value!)}></IonDatetime>
                </IonItem>
                <IonItem>
                    <IonLabel
                        color="primary"
                        position="stacked">Comments: </IonLabel>
                    <IonTextarea
                        placeholder='Enter comments for  your help.'
                        clearOnEdit={true}
                        value={comments}
                        onIonChange={e => setComments(e.detail.value!)}></IonTextarea>
                </IonItem>
                <br/>
                <IonButton color="primary"
                           onClick={viewHelpDetails}>
                    Place Request</IonButton>
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Please wait...'}
                    duration={5000}
                />
            </IonList>
        </IonContent>
    )
}

export default RequestHelpForm;
