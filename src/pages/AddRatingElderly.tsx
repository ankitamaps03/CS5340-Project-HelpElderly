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
    IonHeader,
    IonItemDivider,
    IonLabel,
    IonPage,
    IonRow,
    IonTextarea,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import './Login.css';
import {useHistory} from "react-router-dom";
import React, {useState} from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Header from "../components/Header";
import TopPageHeader from "../components/TopPageHeader";
import ButtonForHome from "../components/ButtonForHome";
import ButtonForBack from "../components/ButtonForBack";

const AddRatingElderly: React.FC = () => {
    let history = useHistory();
    const ratingChanged = (newRating: number) => {
        console.log(newRating);
    };
    const [ratingComments, setRatingComments] = useState('');

    const redirectToHome = () => {
        history.push("/1");
    }
    // @ts-ignore
    return (
        <IonPage>
          <TopPageHeader isLogin={true} />
            <IonContent>
                <ButtonForBack />
                <ButtonForHome />
                <IonCard style={{height: "100%"}}>
                    <IonCardHeader>
                        <IonCardSubtitle>Rate the help service provided.</IonCardSubtitle>
                        <IonCardTitle>Rate Bob Marley</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="3">
                                    <IonAvatar>
                                        <img
                                            src="https://e7.pngegg.com/pngimages/999/998/png-clipart-graphics-avatar-mobile-app-website-user-staff-member-head-cartoon.png"/>
                                    </IonAvatar>
                                    <br/>
                                </IonCol>
                                <IonCol>
                                    <ReactStars
                                        count={5}
                                        value={1}
                                        onChange={ratingChanged}
                                        size={40}
                                        activeColor="#ffd700"
                                    />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCardContent>
                            <IonItemDivider style={{width: '100%'}}>
                                <div>
                                    <IonLabel>
                                        <IonLabel>Do you want to tell us more about Bob Marley?</IonLabel>
                                    </IonLabel>
                                    <IonTextarea
                                        placeholder={'Add comments about your helper'}
                                        value={ratingComments}
                                        onIonChange={e => setRatingComments(e.detail.value!)}/>
                                </div>
                            </IonItemDivider>

                        </IonCardContent>
                        <IonRow>
                            <IonCol size='6'>
                                <IonButton
                                    onClick={redirectToHome}
                                    color="primary">
                                    Give Rating
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton
                                    onClick={redirectToHome}
                                    color="primary">
                                    Skip Rating
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>)
}

export default AddRatingElderly;
