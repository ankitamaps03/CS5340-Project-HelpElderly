import './HomeButtons.css';
import {IonButton} from "@ionic/react";
import {useHistory} from "react-router-dom";
import React from "react";

interface ContainerProps {
    name: string;
}

const HomeButtons: React.FC = () => {

    const history = useHistory();

    const redirect = (buttonName: number) => {
        if (buttonName === 0) {
            history.push(`requestHelp`);
        } else if (buttonName === 1) {
            history.push(`create_account`);
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
