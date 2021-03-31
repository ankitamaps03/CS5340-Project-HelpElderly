import {IonButton, IonCheckbox, IonInput, IonItem, IonLabel, IonList, IonLoading} from "@ionic/react";
import './RequestHelpForm.css';
import {useState} from "react";
import {useHistory, useParams} from "react-router-dom";


const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>();
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    let history = useHistory();
    const [showLoading, setShowLoading] = useState(false);
    let params = {
        name: ''
    }
    params = useParams();
    const redirect = () => {
        if (params.name == "DirectLogin") {
            history.push("/requestHelp/1")
        } else if (params.name == "RequestHelp") {
            setShowLoading(true)
            setTimeout(() => {
                setShowLoading(false);
                history.push('/viewHelpDetails/1')
            }, 2000);
        }
        else if (params.name == "helper") {
            setShowLoading(true)
            setTimeout(() => {
                setShowLoading(false);
                history.push('/requestDetails/2')
            }, 2000);
        }
    }
    return (
        <div>
            <IonList>
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
                <div style={{float: "left"}}>
                    <span style={{color: '#8b69bb', marginRight:'5px', display: 'inline-block'}}>Remember me:</span>
                    <IonCheckbox style={{marginTop: '10px'}} checked={rememberMe} onIonChange={e => setRememberMe(e.detail.checked)}/>
                </div>
                <br/>
                <IonButton color="primary"
                           onClick={redirect}>
                    Login
                </IonButton>
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
            </IonList>

        </div>
    )
}

export default LoginForm;
