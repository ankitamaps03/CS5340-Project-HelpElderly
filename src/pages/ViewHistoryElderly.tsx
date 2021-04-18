import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid, IonIcon,
    IonPage,
    IonRow
} from "@ionic/react";
import './RequestHelp.css';
import {cashSharp, checkmarkCircle, hammerOutline, happy, listCircleSharp} from "ionicons/icons";
import Header from "../components/Header";
// @ts-ignore
import ReactStars from 'react-rating-stars-component';
import TopPageHeader from "../components/TopPageHeader";
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";
import "./ViewHistoryElderly.css"


const ViewHistoryElderly: React.FC = () => {

    let history = useHistory();
    let params = {
        id: ''
    }
    params = useParams();
    let isLogin = false;
    if (params.id) {
        isLogin = true;
    }

    return (
        <IonPage>
            <TopPageHeader isLogin={true} showViewHistory={false}/>
            <IonContent>
                <ButtonForBack/>
                <ButtonForHome/>
                <Header name={"View history for requested help"} icon={listCircleSharp}/>
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar className="user-avatar">
                                    <img
                                        src="https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                        icon={hammerOutline}/>
                                    <strong>Bob Marley</strong> helped you with groceries on 29th March 2021, 03:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                        icon={cashSharp}/>
                                    You paid <strong>55$</strong> using the Credit Card **** **** **** 1234
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{ fontSize: '30px', marginRight: '10px', float: 'left'}}
                                        icon={happy}/>
                                    <div style={{float: "left"}}>
                                        You rated the help with
                                    </div>
                                    <div className='helper-rating'>
                                        <ReactStars
                                            count={5}
                                            value={4}
                                            edit={false}
                                            size={30}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/helpProvided')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/requestHelp/1/groceries')}>
                            Request Help Again
                        </IonButton>
                    </div>
                </IonCard>

                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar className="user-avatar">
                                    <img
                                        src="https://cdn3.vectorstock.com/i/1000x1000/71/87/male-avatar-profile-icon-round-man-face-vector-18307187.jpg"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                        icon={hammerOutline}/>
                                    <strong>Diana Prince </strong>helped you with technology related work on 23th March 2021, 12:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                        icon={cashSharp}/>
                                    You paid <strong>35$</strong> using the Credit Card **** **** **** 6678
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{ fontSize: '30px', marginRight: '10px', float: 'left'}}
                                        icon={happy}/>
                                    You have not rated this help.
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/helpProvided')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/requestHelp/1/groceries')}>
                            Request Help Again
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/addRatingElderlyWoman')}>
                            Rate
                        </IonButton>
                    </div>
                </IonCard>
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar className="user-avatar">
                                    <img
                                        src="https://c8.alamy.com/comp/2ATH5M7/colourful-male-face-circle-in-flat-style-cartoon-vector-icon-modern-design-men-face-person-silhouette-avatar-profile-round-portrait-isolated-2ATH5M7.jpg"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                        icon={hammerOutline}/>
                                    <strong>Tony Stark </strong> helped you with technology related work on 23th March
                                    2021, 12:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                        icon={cashSharp}/>
                                    You paid <strong>60$</strong> using the Credit Card **** **** **** 9876
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{ fontSize: '30px', marginRight: '10px', float: 'left'}}
                                        icon={happy}/>
                                    <div style={{float: "left"}}>
                                        You rated the help with
                                    </div>
                                    <div className='helper-rating'>
                                        <ReactStars
                                            count={5}
                                            value={5}
                                            edit={false}
                                            size={30}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/helpProvided')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary">
                            Request Help Again
                        </IonButton>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
        )
}

export default ViewHistoryElderly;
