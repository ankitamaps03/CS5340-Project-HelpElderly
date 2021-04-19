import {
    IonAlert,
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonIcon,
    IonItem,
    IonPage,
    IonRow
} from "@ionic/react";
import {book, cashSharp, chatbubble, hammerOutline, happy, map} from "ionicons/icons";
import Header from "./Header";
import TopPageHeader from "./TopPageHeader";
import React, { useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import ButtonForBack from "./ButtonForBack";
import ButtonForHome from "./ButtonForHome";
import Modal from "./Modal";
import "../pages/ViewHistoryElderly.css"
import Map from "./Map";


const ViewRequest: React.FC = () => {
  const [isCovidTested, setCovidTested] = useState(false);
  const [declined1, setDeclined1] = useState(false);
  const [declined2, setDeclined2] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  let history = useHistory();

  let params = {
      id: ''
  }
  params = useParams();
  let isLogin = false;
  console.log({params})
  if (params.id) {
      isLogin = true;

  }

  const redirectToRequestDetail =()=>{
        if(params.id) {
            setShowModal1(false)
            history.push('/requestDetails')
        }
        else{
            setShowModal1(false)
            history.push('/login/helper')
        }

  }
  return (
      <IonPage>
          <TopPageHeader isLogin={isLogin} showViewHistory={isLogin}/>
          <IonContent>
              <ButtonForBack/>
              <ButtonForHome callFrom="1"/>
              <Header name={"View Requests"} icon={book}/>
              <IonCard>
                  <IonCardHeader>
                      <IonCardTitle>Alice needs help picking up groceries on 4th of April 2021, 04:00PM (EST).</IonCardTitle>
                  </IonCardHeader>
                  <IonGrid>

                      <IonRow>
                          <IonCol size="3">
                              <IonAvatar className="user-avatar">
                                  <img
                                      src="https://cdn3.vectorstock.com/i/1000x1000/71/87/male-avatar-profile-icon-round-man-face-vector-18307187.jpg"/>
                              </IonAvatar>
                          </IonCol>
                          <IonCol><Map height='200px'/></IonCol>
                          <IonCol>
                              <IonCardContent className='helper-details'>
                                  <IonIcon
                                      style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                      icon={map}/>
                                  Location: 1191 Boylston street, Boston
                              </IonCardContent>
                              <IonCardContent className='helper-details'>
                                  <IonIcon
                                      style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                      icon={cashSharp}/>
                                  Amount to be paid: 55$
                              </IonCardContent>
                              <IonCardContent className='helper-details'>
                                  <IonIcon
                                      style={{ fontSize: '30px', marginRight: '10px', float: 'left'}}
                                      icon={chatbubble}/>
                                  Comments: Pick up one gallon of milk and a dozed bananas. Address is Star Market, 1330 Boylston St, Boston MA. Call me if you any information
                              </IonCardContent>
                          </IonCol>
                      </IonRow>
                  </IonGrid>
                  {!declined1 &&  <div id="requestButtons1">
                  <IonButton fill="solid"
                                 color="secondary"
                                 onClick={()=>isCovidTested?redirectToRequestDetail():setShowModal1(true)}>
                          Accept Request
                      </IonButton>
                      <IonButton fill="solid"
                                 color="secondary"
                                 onClick={() => setDeclined1(true)}>
                          Decline Request
                      </IonButton>
                  </div>}
                  <div id="acceptedMessage1" style={{ display: "none"}}>
                  <IonItem color="secondary">
                    Request Accepted
                    </IonItem>
                  </div>
                  {declined1 && <div id="declinedMessage1" >
                  <IonItem color="warning">
                    Request Declined
                    </IonItem>
                  </div>}
              </IonCard>

              <IonCard>
                  <IonCardHeader>
                      <IonCardTitle> Tony Stark needs help with technology related work on 4th April 2021, 12:00 PM (EST).</IonCardTitle>
                  </IonCardHeader>
                  <IonGrid>
                      <IonRow>
                          <IonCol size="3">
                              <IonAvatar className="user-avatar">
                                  <img
                                      src="https://c8.alamy.com/comp/2ATH5M7/colourful-male-face-circle-in-flat-style-cartoon-vector-icon-modern-design-men-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH5M7.jpg"/>
                              </IonAvatar>
                          </IonCol>
                          <IonCol><Map height='200px'/></IonCol>
                          <IonCol>
                              <IonCardContent className='helper-details'>
                                  <IonIcon
                                      style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                      icon={map}/>
                                  Location: 877 Huntington ave, Boston
                              </IonCardContent>
                              <IonCardContent className='helper-details'>
                                  <IonIcon
                                      style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                      icon={cashSharp}/>
                                  Amount to be paid: 35$
                              </IonCardContent>
                              <IonCardContent className='helper-details'>
                                  <IonIcon
                                      style={{ fontSize: '30px', marginRight: '10px', float: 'left'}}
                                      icon={chatbubble}/>
                                  Comments: Help me set up Zoom on my laptop. Call me for more details.
                              </IonCardContent>
                          </IonCol>
                      </IonRow>
                  </IonGrid>
                  {!declined2 && <div id="requestButtons2" >
                      <IonButton fill="solid"
                                 color="secondary"
                                 onClick={()=>isCovidTested?redirectToRequestDetail():setShowModal1(true)}>
                          Accept Request
                      </IonButton>
                      <IonButton fill="solid"
                                 color="secondary"
                                 onClick={() => setDeclined2(true)}>
                          Decline Request
                      </IonButton>
                  </div>}
                  <div id="acceptedMessage2" style={{ display: "none"}}>
                  <IonItem color="secondary">
                    Request Accepted
                    </IonItem>
                  </div>
                  {declined2 && <div id="declinedMessage2" >
                  <IonItem color="warning">
                    Request Declined
                    </IonItem>
                  </div>}
              </IonCard>
        <Modal showModal={showModal1}
                   yesAction={() =>{
                    setCovidTested(true)
                    redirectToRequestDetail()
                   }}
                   primaryButtonText={"Yes"}
                   noAction={()=>{
                       setShowModal1(false)
                       setShowModal2(true)
                   }}
                   showExtraButtons={true}
                   closeModal={() => setShowModal1(false)}
                   bodyText="Did you get Covid test in last 2 days or have you been vaccinated?"
            />
        <Modal showModal={showModal2}
                primaryButtonText={"Okay"}
                yesAction={() => setShowModal2(false)}
                closeModal={() => setShowModal2(false)}
                showExtraButtons={false}
                bodyText="Please get tested and visit again!"
        />
          </IonContent>
      </IonPage>
      )
}

export default ViewRequest;


