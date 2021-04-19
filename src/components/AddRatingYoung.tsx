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
import {useHistory} from "react-router-dom";
import React, {useState} from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import Header from "./Header";
import TopPageHeader from "./TopPageHeader";
import ButtonForHome from "./ButtonForHome";
import ButtonForBack from "./ButtonForBack";
import "../pages/AddRatingElderly.css";

const AddRatingYoung: React.FC = () => {
    let history = useHistory();
    const ratingChanged = (newRating: number) => {
        console.log(newRating);
    };
    const [ratingComments, setRatingComments] = useState('');

    const redirectToHome = () => {
        history.push("/2");
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
                        <IonCardSubtitle>Rate the helpee.</IonCardSubtitle>
                        <IonCardTitle className="helper-heading">Rate Alice Hyatt</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="2">
                                    <IonAvatar className='avatar'>
                                        <img
                                            src="https://cdn3.vectorstock.com/i/1000x1000/95/22/old-woman-avatar-round-icon-vector-24929522.jpg"/>
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
                                <div className="helper-details">
                                    <IonLabel>
                                        <IonLabel>Do you want to tell us more about Alice Hyatt?</IonLabel>
                                    </IonLabel>
                                    <IonTextarea
                                        placeholder={'Add comments about the person you helped'}
                                        value={ratingComments}
                                        onIonChange={e => setRatingComments(e.detail.value!)}/>
                                </div>
                            </IonItemDivider>

                        </IonCardContent>
                        <IonRow>
                            <IonCol size='1'>
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

export default AddRatingYoung;
