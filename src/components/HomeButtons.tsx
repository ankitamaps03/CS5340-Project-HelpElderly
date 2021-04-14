import './HomeButtons.css';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonImg,
    IonRow
} from "@ionic/react";
import {useHistory, useParams} from "react-router-dom";
import React from "react";

interface ContainerProps {
    name: string;
}

const HomeButtons: React.FC = () => {

    const history = useHistory();
    let params = {
        id: ''
    }
    params = useParams();

    const redirect = (buttonName: number) => {
        console.log({params}, "in home buttons")
        if (params.id) {
            if (buttonName === 0) {
                history.push(`requestHelp/1`);
            } else if (buttonName === 1) {
                history.push(`viewRequest/1`);
            }
        }
        else {
            if (buttonName === 0) {
                history.push(`requestHelp`);
            } else if (buttonName === 1) {
                history.push(`viewRequest`);
            }
        }

    }

    return (
        <div className="container">
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonCard mode="md" className="homeCard">
                            <IonCardHeader>
                                <IonCardTitle>Request for help</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <div>
                                    <IonImg
                                        style={{width: "35%", display: "inline-block", marginBottom: "10px"}}
                                        src="https://cdn3.iconfinder.com/data/icons/outline-color-common-5/32/help-add-512.png"/>
                                </div>
                                <IonButton
                                    color="primary"
                                    onClick={() => redirect(0)}>
                                    Request Help
                                </IonButton>
                            </IonCardContent>
                        </IonCard>

                    </IonCol>
                    <IonCol>
                        <IonCard mode="md" className="homeCard">
                            <IonCardHeader>
                                <IonCardTitle>Offer help</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <div>
                                    <IonImg
                                        style={{width: "35%", display: "inline-block", marginBottom: "10px"}}
                                        src="https://cdn2.iconfinder.com/data/icons/medical-2121/66/Medical_Care-512.png"/>
                                </div>
                                <IonButton
                                    color="primary"
                                    onClick={() => redirect(1)}>
                                    Offer Help
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

            <br/>
            <br/>

        </div>
    );
};

export default HomeButtons;
