import {
    IonButton,
    IonCheckbox,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonSelect,
    IonSelectOption
} from "@ionic/react";
import './RequestHelpForm.css';
import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>();
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [elderlyOrHelper, setElderlyOrHelper] = useState<string>();
    const [showElderlyOrHelper, setShowElderlyOrHelper] = useState<boolean>(false);
    let history = useHistory();
    const [showLoading, setShowLoading] = useState<boolean>(false);
    let params = {
        name: ''
    }
    params = useParams();
    useEffect(() => {
        if (params.name == "DirectLogin") {
            setShowElderlyOrHelper(true);
        }
    }, [])
    let validation = true;
    const redirect = () => {
        if (params.name == "DirectLogin") {
            if (elderlyOrHelper == undefined || elderlyOrHelper == "" || elderlyOrHelper == null) {
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
                    history.push("/requestHelp/1")
                } else {
                    history.push("/viewRequest/2")
                }
            }

        } else if (params.name == "requestHelp") {

            setShowLoading(true)
            setTimeout(() => {
                setShowLoading(false);
                history.push('/viewHelpDetails/1')
            }, 2000);

        } else if (params.name == "helper") {
            setShowLoading(true)
            setTimeout(() => {
                setShowLoading(false);
                history.push('/requestDetails/2')
            }, 2000);
        }

    }
    return (

        <IonList style={{height: "80%",     margin: "0px 25px 0px 25px"}}>
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
                    placeholder="Enter your password."
                    value={password}
                    required
                    onIonChange={e => setPassword(e.detail.value!)}/>
            </IonItem>
            {showElderlyOrHelper &&
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
            }
            <div style={{float: "left", width: "100%", textAlign: "left"}}>
                <span style={{color: '#8b69bb', marginRight: '5px', display: 'inline-block'}}>Remember me:</span>
                <IonCheckbox style={{marginTop: '10px'}} checked={rememberMe}
                             onIonChange={e => setRememberMe(e.detail.checked)}/>
            </div>

            <div>
                <IonButton color="primary"
                           onClick={redirect}>
                    Login
                </IonButton>
            </div>
            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Requesting help.. Please wait..'}
                duration={5000}
            />
            <IonLoading
                cssClass='my-custom-class'
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Processing the request.. Please wait..'}
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

export default LoginForm;
