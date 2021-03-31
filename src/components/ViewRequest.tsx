import {
    IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonPage,
  IonRow
} from "@ionic/react";
import {book} from "ionicons/icons";
import Header from "./Header";
import TopPageHeader from "./TopPageHeader";
import React, { useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import ButtonForBack from "./ButtonForBack";
import ButtonForHome from "./ButtonForHome";


const ViewRequest: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [isCovidTested, setCovidTested] = useState(false);
  let history = useHistory();

  let params = {
      id: ''
  }
  params = useParams();
  let isLogin = false;
  if (params.id) {
      isLogin = true;
  }
  const hideAcceptButton = (id: number) =>{
    var x = document.getElementById("requestButtons"+id);
    if(x!=null){
        x.style.display = "none";
    }
  }
  const showDeclinedMessage=(id: number)=>{
    var y = document.getElementById("declinedMessage"+id);
    if(y!=null){
        y.style.display = "block";
    }
  }
  const showAcceptedMessage=(id: number)=>{
    var y = document.getElementById("acceptedMessage"+id);
    if(y!=null){
        y.style.display = "block";
    }
  }
  const hideButtonsForDeclined = (id: number) =>{
    hideAcceptButton(id)
    showDeclinedMessage(id)
  };
  const hideButtonsForAccepted = (id: number) =>{
    hideAcceptButton(id)
    showAcceptedMessage(id)
  };
  const acceptRequest =(id: number)=>{
    if(isCovidTested){
        hideButtonsForAccepted(id)
        history.push('/requestDetails')
    }else{
        setShowAlert1(true)
    }
  }
  return (
      <IonPage>
          <TopPageHeader isLogin={true} showViewHistory={false}/>
          <IonContent>
              <ButtonForBack/>
              <ButtonForHome/>
              <Header name={"View Requests"} icon={book}/>
              <IonCard>
                  <IonGrid>
                      <IonRow>
                          <IonCol size="3">
                              <IonAvatar>
                                  <img
                                      src="https://cdn3.vectorstock.com/i/1000x1000/71/87/male-avatar-profile-icon-round-man-face-vector-18307187.jpg"/>
                              </IonAvatar>
                          </IonCol>
                          <IonCol>
                              <IonCardContent>
                              Alice needs help picking up groceries on 4th of April 2021, 04:00PM (EST).
                              </IonCardContent>
                              <IonCardContent>
                                  Location: 1191 Boylston street, Boston
                              </IonCardContent>
                              <IonCardContent>
                                  Comments: Pick up one gallon of milk and a dozed bananas. Address is Star Market, 1330 Boylston St, Boston MA. Call me if you any information
                              </IonCardContent>
                          </IonCol>
                      </IonRow>
                  </IonGrid>
                  <div id="requestButtons1">
                  <IonButton fill="solid"
                                 color="secondary"
                                 onClick={()=>acceptRequest(1)}>
                          Accept Request
                      </IonButton>
                      <IonButton fill="solid"
                                 color="secondary"
                                 onClick={() => hideButtonsForDeclined(1)}>
                          Decline Request
                      </IonButton>
                  </div>
                  <div id="acceptedMessage1" style={{ display: "none"}}>
                  <IonItem color="secondary">
                    Request Acceped
                    </IonItem>
                  </div>
                  <div id="declinedMessage1" style={{ display: "none"}}>
                  <IonItem color="warning">
                    Request Declined
                    </IonItem>
                  </div>
              </IonCard>

              <IonCard>
                  <IonGrid>
                      <IonRow>
                          <IonCol size="3">
                              <IonAvatar>
                                  <img
                                      src="https://c8.alamy.com/comp/2ATH5M7/colourful-male-face-circle-in-flat-style-cartoon-vector-icon-modern-design-men-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH5M7.jpg"/>
                              </IonAvatar>
                          </IonCol>
                          <IonCol>
                              <IonCardContent>
                                  Tony Stark needs help with technology related work on 4th April 2021, 12:00 PM (EST)
                              </IonCardContent>
                              <IonCardContent>
                                  Location: 877 Huntington ave, Boston
                              </IonCardContent>
                              <IonCardContent>
                                  Comments: Help me set up Zoom on my laptop. Call me for more details.
                              </IonCardContent>
                          </IonCol>
                      </IonRow>
                  </IonGrid>
                  <div id="requestButtons2" >
                      <IonButton fill="solid"
                                 color="secondary"
                                 onClick={()=>acceptRequest(2)}>
                          Accept Request
                      </IonButton>
                      <IonButton fill="solid"
                                 color="secondary"
                                 onClick={() => hideButtonsForDeclined(2)}>
                          Decline Request
                      </IonButton>
                  </div>
                  <div id="acceptedMessage2" style={{ display: "none"}}>
                  <IonItem color="secondary">
                    Request Acceped
                    </IonItem>
                  </div>
                  <div id="declinedMessage2" style={{ display: "none"}}>
                  <IonItem color="warning">
                    Request Declined
                    </IonItem>
                  </div>
              </IonCard>
              <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Alert'}
          message={'Did you take Covid test in past 2 days or have you been vaccinated?'}
          buttons={[{
              text: 'Yes',
              handler: () => {
                  setCovidTested(true)
                  history.push('/requestDetails')
              }
          
          },{
            text: 'No',
            role: "cancel",
            cssClass: 'secondary',
            handler: () => setShowAlert2(true)
          }]}
        />
        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Alert'}
          message={'Kindly take Covid test and visit us again.'}
          buttons={['OK']}
        />
          </IonContent>
      </IonPage>
      )
}

export default ViewRequest;


