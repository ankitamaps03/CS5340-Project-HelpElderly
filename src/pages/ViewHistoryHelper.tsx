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
import {cashSharp, hammerOutline, happy, listCircleSharp} from "ionicons/icons";
import Header from "../components/Header";
import TopPageHeader from "../components/TopPageHeader";
// @ts-ignore
import ReactStars from 'react-rating-stars-component';
import React from "react";
import {useHistory, useParams} from "react-router-dom";
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";
import "./ViewHistoryElderly.css"


const ViewHistoryHelper: React.FC = () => {

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
                <Header name={"View history of requested provided"} icon={listCircleSharp}/>
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar className="user-avatar">
                                    <img
                                        src="https://cdn1.iconfinder.com/data/icons/people-49/512/_elderly_man-512.png"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                        icon={hammerOutline}/>
                                    You helped <strong>Bob Marley</strong> with groceries on 29th March 2021, 03:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                        icon={cashSharp}/>
                                    You received a payment of <strong>15$</strong> for the help provided.
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
                                            value={3}
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
                                   onClick={() => history.push('/helpProvidedHelper')}>
                            View Help
                        </IonButton>
                    </div>
                </IonCard>

                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3">
                                <IonAvatar className="user-avatar">
                                    <img
                                        src="https://icon-library.com/images/old-lady-icon/old-lady-icon-5.jpg"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                        icon={hammerOutline}/>
                                   You helped <strong>Diana Prince</strong> with technology related work on 23th March 2021, 12:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                        icon={cashSharp}/>
                                    You received a payment of <strong>30$</strong> for the help provided.
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
                                   onClick={() => history.push('/helpProvidedHelper')}>
                            View Help
                        </IonButton>
                        <IonButton fill="solid"
                                   color="secondary"
                                   onClick={() => history.push('/addRatingYoung')}>
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
                                        src="data:image/jpeg;base64,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"/>
                                </IonAvatar>
                            </IonCol>
                            <IonCol>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                                        icon={hammerOutline}/>
                                    You helped <strong>Tony Stark </strong>  with technology related work on 23th March 2021, 12:00 PM (EST)
                                </IonCardContent>
                                <IonCardContent className='helper-details'>
                                    <IonIcon
                                        style={{color: 'purple', fontSize: '30px', marginRight: '10px'}}
                                        icon={cashSharp}/>
                                    You received a payment of <strong>25$</strong> for the help provided.
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
                                   onClick={() => history.push('/helpProvidedHelper')}>
                            View Help
                        </IonButton>
                    </div>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default ViewHistoryHelper;
