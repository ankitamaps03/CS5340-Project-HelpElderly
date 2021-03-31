import {IonButton, IonInput, IonItem, IonLabel, IonList, IonLoading, IonSelect, IonSelectOption} from "@ionic/react";
import './RequestHelpForm.css';
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const CreateForm: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>();
    const [elderlyOrHelper, setElderlyOrHelper] = useState<string>();

    let history = useHistory();
    const [showLoading, setShowLoading] = useState(false);
    let validation = true;
    const redirectToLoginAccount = () => {
        if (elderlyOrHelper == undefined || elderlyOrHelper == null || elderlyOrHelper == "") {
            validation = false;
            toast.error('Select request for help or offer help', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        if (validation) {
            if (elderlyOrHelper == "0") {
                history.push('/loginAccount/requestHelp')
            } else {
                history.push('/loginAccount/helper')
            }
        }
    }
    return (
        <IonList style={{height: "80%"}}>
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
            <IonItem>
                <IonLabel
                    color="primary"
                    position="floating"
                >Request help or offer help *: </IonLabel>
                <IonSelect placeholder="Request help or offer help"
                           value={elderlyOrHelper}
                           onIonChange={e => setElderlyOrHelper(e.detail.value!)}>
                    <IonSelectOption value="0">Request help</IonSelectOption>
                    <IonSelectOption value="1">Offer help</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonButton color="primary"
                       onClick={redirectToLoginAccount}>

                Create Account
            </IonButton>
            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Requesting help.. Please wait..'}
                duration={5000}
            />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </IonList>
    )
}

export default CreateForm;
