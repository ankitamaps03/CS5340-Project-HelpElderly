import {IonButton, IonCheckbox, IonContent, IonInput, IonItem, IonLabel, IonList, IonLoading} from "@ionic/react";
import './RequestHelpForm.css';
import {useState} from "react";
import {useHistory, useParams} from "react-router-dom";


const CreateForm: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>();
    

    let history = useHistory();
    const [showLoading, setShowLoading] = useState(false);

    const redirectToHelper = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false);
            history.push('/viewHelpDetails/1')
        }, 2000);

    }
    return (
        <div>
            <IonList>
            <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >First Name *: </IonLabel>
                    <IonInput
                        type='text'
                        placeholder="Enter your first name."
                        value={firstName}
                        required
                        onIonChange={e => setFirstName(e.detail.value!)}/>
                </IonItem>

                <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >Last Name *: </IonLabel>
                    <IonInput
                        type='text'
                        placeholder="Enter your last name."
                        value={lastName}
                        required
                        onIonChange={e => setLastName(e.detail.value!)}/>
                </IonItem>

                <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >Email *: </IonLabel>
                    <IonInput
                        type='email'
                        placeholder="Enter your email."
                        value={email}
                        required
                        onIonChange={e => setEmail(e.detail.value!)}/>
                </IonItem>

                <IonItem>
                    <IonLabel
                        color="primary"
                        position="floating"
                    >Password *: </IonLabel>
                    <IonInput
                        type='password'
                        placeholder="Set your password."
                        value={password}
                        required
                        onIonChange={e => setPassword(e.detail.value!)}/>
                </IonItem>
                
                <IonButton color="primary"
                           onClick={redirectToHelper}>

                    Create Account
                </IonButton>
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Requesting help.. Please wait..'}
                    duration={5000}
                />
            </IonList>

        </div>
    )
}

export default CreateForm;
