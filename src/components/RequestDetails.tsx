import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonItemDivider,
    IonLabel,
    IonPage,
    IonRow
} from "@ionic/react";
import './RequestHelpForm.css';
import React, {useState} from "react";
import {cash, chatbubble, hammer, newspaperSharp, pin, timerOutline} from "ionicons/icons";
import TopPageHeader from "./TopPageHeader";
import Header from "./Header";
import ButtonForBack from "./ButtonForBack";
import ButtonForHome from "./ButtonForHome";
import Modal from "./Modal";
import {toast, ToastContainer} from 'react-toastify';
import {useHistory} from "react-router";
import {useParams} from "react-router-dom";

const RequestDetails: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showCallerDetails, setShowCallerDetails] = useState(false);
    const [startHelp, setStartHelp] = useState(true)
    let params = {
        id: ''
    }
    params = useParams();
    let isLogin = false;
    if (params.id) {
        isLogin = true;
    }
    let history = useHistory();
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
    const redirectToRating = () => {
        setShowModal(false)
        history.push('/addRatingYoung')
    }

    const redirectToHome = () => {
        setShowModal(false)
        history.push('/1')
    }
    const startHelping = () =>{
        if(startHelp){
           setStartHelp(false)
        }
    }
    const finishedHelping=()=>{
        setShowModal(true)
    }
    return (
        <IonPage>
            <TopPageHeader isLogin={isLogin} />
            <IonContent>
                <ButtonForBack />
                <ButtonForHome />
                <Header name={"View Help Details"} icon={newspaperSharp} />
                <IonCard style={{height: "100%"}}>
                    <IonCardHeader>
                        <IonIcon icon={pin} slot="start"/>
                        <IonCardHeader>Meet Alice Hyatt at 1191 Boylston St, Boston MA 02215</IonCardHeader>

                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3">
                                    <IonAvatar>
                                        <img
                                            src="https://cdn3.vectorstock.com/i/1000x1000/71/87/male-avatar-profile-icon-round-man-face-vector-18307187.jpg"/>
                                    </IonAvatar>
                                </IonCol>

                                <IonCol>
                                    <IonItemDivider>
                                        <IonLabel style={{marginRight: "7px"}}>
                                            <IonIcon style={{color: 'black', fontSize: '20px', marginTop: '2px'}}
                                                     icon={hammer}/>
                                        </IonLabel>
                                        <IonLabel>
                                            <strong>Help Requested:</strong> Grocery Pick-up
                                        </IonLabel>
                                    </IonItemDivider>
                                    <IonItemDivider>
                                        <IonLabel style={{marginRight: "7px"}}>
                                            <IonIcon style={{color: 'purple', fontSize: '20px', marginTop: '2px'}}
                                                     icon={cash}/>
                                        </IonLabel>
                                        <IonLabel>
                                            <strong>Amount to be paid:</strong> 55$
                                        </IonLabel>
                                    </IonItemDivider>
                                    <IonItemDivider>
                                        <IonLabel style={{marginRight: "7px"}}>
                                            <IonIcon style={{color: '#b83333', fontSize: '20px', marginTop: '2px'}}
                                                     icon={timerOutline}/>
                                        </IonLabel>
                                        <IonLabel>
                                            <strong> When: </strong>30th March 2021, 03:00PM (EST)
                                        </IonLabel>
                                    </IonItemDivider>
                                    <IonItemDivider>
                                    <div style={{marginRight: "4px"}}>
                                        <IonIcon style={{color: '', fontSize: '20px', marginTop: '2px'}}
                                                 icon={chatbubble}/>
                                    </div>
                                    <div>
                                        <strong>Comments:</strong> Pick up one gallon of milk and a dozen bananas.
                                        Address is Star
                                        Market, 1330 Boylston St, Boston MA. Call me if you need any information.
                                    </div>
                                </IonItemDivider>
                            </IonCol>
                      </IonRow>
                            <IonRow>
                                <IonButton
                                    color="secondary"
                                    onClick={() => setShowCallerDetails(true)}>
                                    Call
                                </IonButton>

                                { startHelp && <IonButton id="startHelp"
                                    color="secondary"
                                    onClick={startHelping}>
                                    Start Helping
                                </IonButton>}
                                {startHelp == false &&
                                <IonButton id="finishHelp"
                                           color="secondary"
                                           onClick={finishedHelping}>
                                    Finished Helping?
                                </IonButton>
                                }
                            </IonRow>

                        </IonGrid>
              </IonCardContent>
          </IonCard>

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
            <Modal showModal={showModal}
                   yesAction={redirectToRating}
                   primaryButtonText={"Yes"}
                   noAction={redirectToHome}
                   showExtraButtons={true}
                   closeModal={() => setShowModal(false)}
                   bodyText="Do you want to rate Alice?"
            />
      </IonContent>
      </IonPage>
  )
}

export default RequestDetails;
