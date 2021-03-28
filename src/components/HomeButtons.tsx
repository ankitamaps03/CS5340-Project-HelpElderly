import './HomeButtons.css';
import {IonButton} from "@ionic/react";
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
            <IonButton
                color="primary"
                onClick={() => redirect(0)}>
                Request Help
            </IonButton>
            <br/>
            <br/>
            <IonButton
                color="primary"
                onClick={() => redirect(1)}>
                Offer Help</IonButton>
        </div>
    );
};

export default HomeButtons;
