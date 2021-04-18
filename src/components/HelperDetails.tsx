import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonItemDivider,
    IonLabel,
    IonRow
} from "@ionic/react";
import './HelperDetails.css';
import React, {useEffect, useState} from "react";
import {cashSharp, chatbubble, checkmarkCircle, star, time} from "ionicons/icons";
import {useHistory} from "react-router-dom";
import Modal from "./Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HelperDetails: React.FC = () => {


    let history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [showCallerDetails, setShowCallerDetails] = useState(false);
    const redirectToRating = () => {
        setShowModal(false)
        history.push('/AddRatingElderly/1')
    }

    const redirectToHome = () => {
        setShowModal(false)
        history.push('/1')
    }

    const showToaster = () => {
        setShowCallerDetails(false);
        toast.info('Copied to the clipboard!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    useEffect(() => {
        if(showCallerDetails == false) {
            let timer = setTimeout(() => {
                setShowModal(true);
            }, 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showCallerDetails])

    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Bob Marley is on his way to 1191 Boylston St, Boston MA 02215</IonCardSubtitle>
                    <IonCardTitle className="helper-heading">"Bob Marley" is your assigned help</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="2">
                                <IonAvatar className='user-avatar'>
                                    <img
                                        src="https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png"/>
                                </IonAvatar>
                                <br/>
                                <IonButton
                                    color="secondary"
                                    onClick={() => setShowCallerDetails(true)}>
                                    Call Helper
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <div className="helper-details">
                                    <IonIcon
                                    style={{color: 'green', fontSize: '30px', marginRight: '10px'}}
                                    icon={checkmarkCircle}/>
                                    Bob Marley is covid negative.
                                </div>
                                <div className="helper-details">
                                    <IonIcon
                                        style={{color: 'yellow', fontSize: '30px', marginRight: '10px'}}
                                        icon={star}/>
                                    Bob Marley has a 4 star rating.
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCardContent style={{width: "100%"}}>
                                <IonItemDivider>
                                    <IonLabel style={{marginRight: "7px"}}>
                                        <IonIcon style={{color: '#b83333', fontSize: '20px', marginTop: '2px'}}
                                                 icon={time}/>
                                    </IonLabel>
                                    <div className="helper-details">
                                        Estimated time is 30 minutes.
                                    </div>
                                </IonItemDivider>
                            </IonCardContent>
                        </IonRow>
                        <IonRow>
                            <IonCardContent style={{width: "100%"}}>
                                <IonItemDivider>
                                    <IonLabel style={{marginRight: "7px"}}>
                                        <IonIcon style={{color: 'purple', fontSize: '20px', marginTop: '2px'}}
                                                 icon={cashSharp}/>
                                    </IonLabel>
                                    <div className="helper-details">
                                        You paid $55 using the Credit Card **** **** **** 1234
                                    </div>
                                </IonItemDivider>
                            </IonCardContent>
                        </IonRow>
                        <IonRow>
                            <IonCardContent style={{width: "100%"}}>
                                <IonItemDivider>
                                    <div style={{marginRight: "4px"}}>
                                        <IonIcon style={{color: '', fontSize: '20px', marginTop: '2px'}}
                                                 icon={chatbubble}/>
                                    </div>
                                    <div className="helper-details">
                                        Your comments: Pick up one gallon of milk and a dozed bananas. Address is Star
                                        Market, 1330 Boylston St, Boston MA. Call me if you any information.
                                    </div>
                                </IonItemDivider>
                            </IonCardContent>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
            <Modal showModal={showModal}
                   yesAction={redirectToRating}
                   primaryButtonText={"Yes"}
                   noAction={redirectToHome}
                   showExtraButtons={true}
                   closeModal={() => setShowModal(false)}
                   bodyText="Bob Marley finished helping you. Do you want to rate the help provided by Bob Marley?"
            />
            <Modal showModal={showCallerDetails}
                   showExtraButtons={false}
                   primaryButtonText={"Copy to Clipboard"}
                   yesAction={showToaster}
                   closeModal={() => setShowCallerDetails(false)}
                   bodyText="Phone number: +1 567 890 7656"
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
        </IonContent>
    )
}

export default HelperDetails;
