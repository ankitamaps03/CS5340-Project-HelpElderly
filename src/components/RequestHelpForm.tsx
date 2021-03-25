import {
    IonButton,
    IonContent,
    IonDatetime,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonSelect,
    IonSelectOption,
    IonTextarea
} from "@ionic/react";
import './RequestHelpForm.css';
import {useState} from "react";
import {useHistory} from "react-router-dom";

const RequestHelpForm: React.FC = () => {
    const [location, setLocation] = useState<string>('1191 Boylston St, Boston MA 02215');
    const [typeOfHelp, setTypeOfHelp] = useState<string>();
    const [comments, setComments] = useState<string>();
    const [when, setWhen] = useState<string>((new Date()).toString());
    let history = useHistory();
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
                           onClick={() => history.push(`ViewHelpDetails`)}>
                    Place Request</IonButton>
            </IonList>
        </IonContent>
    )
}

export default RequestHelpForm;
