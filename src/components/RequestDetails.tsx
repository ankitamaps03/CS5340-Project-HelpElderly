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
import '../pages/RequestHelp.css';
import Map from "./Map";

const RequestDetails: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showCallerDetails, setShowCallerDetails] = useState(false);
    const [showHelpStarted, setShowHelpStarted] = useState(false);
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

    const closeHelpingModal = () => {
        setShowHelpStarted(false);
    }

    const redirectToRating = () => {
        setShowModal(false)
        history.push('/addRatingYoung')
    }

    const redirectToHome = () => {
        setShowModal(false)
        history.push('/1')
    }
    const startHelping = () => {
        if (startHelp) {
            setShowHelpStarted(true);
            setStartHelp(false)
        }

        setTimeout(() => {
            setShowHelpStarted(false);
        }, 7000);
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
                        <IonCardHeader className="helper-heading">Meet Alice Hyatt at 1191 Boylston St, Boston MA,
                            02215</IonCardHeader>

                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3">
                                    <IonAvatar className='user-avatar'>
                                        <img
                                            src="https://cdn3.vectorstock.com/i/1000x1000/95/22/old-woman-avatar-round-icon-vector-24929522.jpg"/>
                                    </IonAvatar>
                                    <br />
                                    <br />
                                    <br />
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
                                </IonCol>
                                <IonCol><Map height='400px'/></IonCol>
                                <IonCol>
                                    <IonCardContent style={{width: "100%"}}>
                                        <IonItemDivider>
                                            <div className="helper-details">
                                                <IonIcon style={{
                                                    color: 'black',
                                                    fontSize: '30px',
                                                    marginTop: '2px',
                                                    marginRight: '10px'
                                                }}
                                                         icon={hammer}/>
                                                <strong>Help Requested:</strong> Grocery Pick-up
                                            </div>
                                        </IonItemDivider>
                                    </IonCardContent>
                                    <IonCardContent style={{width: "100%"}}>
                                        <IonItemDivider>
                                            <div className="helper-details">
                                                <IonIcon style={{color: 'purple', fontSize: '30px', marginTop: '2px',  marginRight: '10px'}}
                                                         icon={cash}/>
                                                <strong>Amount to be paid:</strong> 15$
                                            </div>
                                        </IonItemDivider>
                                    </IonCardContent>
                                    <IonCardContent style={{width: "100%"}}>
                                        <IonItemDivider>
                                            <div className="helper-details">
                                                <IonIcon style={{color: '#b83333', fontSize: '30px', marginTop: '2px',  marginRight: '10px'}}
                                                         icon={timerOutline}/>
                                                <strong> When: </strong>30th March 2021, 03:00PM (EST)
                                            </div>
                                        </IonItemDivider>
                                    </IonCardContent>
                                    <IonCardContent style={{width: "100%"}}>
                                        <IonItemDivider>
                                            <div className="helper-details">

                                                <IonIcon style={{color: '', fontSize: '30px', marginTop: '2px',  marginRight: '10px'}}
                                                         icon={chatbubble}/>

                                                <strong>Comments:</strong> Pick up one gallon of milk and a dozen
                                                bananas.
                                                Address is Star Market, 1330 Boylston St, Boston MA. Call me if you need
                                                any
                                                information.

                                            </div>
                                        </IonItemDivider>
                                    </IonCardContent>
                                </IonCol>
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
                <Modal showModal={showHelpStarted}
                       showExtraButtons={false}
                       primaryButtonText={"OK"}
                       yesAction={closeHelpingModal}
                       closeModal={closeHelpingModal}
                       bodyText="You have started helping Alice Hyatt. Please click on 'Finish helping' button once you have finished helping."
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
                       bodyText="You have finished helping Alice Hyatt.Do you want to rate Alice?"
                />
      </IonContent>
      </IonPage>
  )
}

export default RequestDetails;
