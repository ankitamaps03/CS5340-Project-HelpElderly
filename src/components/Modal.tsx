import {IonButton, IonCol, IonGrid, IonModal, IonRow} from "@ionic/react";
import React from "react";
import './Modal.css'

type ModalProps = {
    showModal: boolean
    yesAction?: () => void,
    noAction?: () => void,
    closeModal: () => void,
    bodyText: string,
    showExtraButtons: boolean,
    primaryButtonText: string
}

const Modal = ({showExtraButtons = false, yesAction, primaryButtonText, noAction, showModal, closeModal, bodyText}: ModalProps) => {


    return (
        <IonModal
            showBackdrop
            isOpen={showModal}
            cssClass='my-custom-class'>
            <IonButton
                style={{width: "28%"}}
                onClick={closeModal}>Close</IonButton>
            <div style={{height: "100%"}}>{bodyText}</div>

            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonButton onClick={yesAction}>{primaryButtonText}</IonButton>
                    </IonCol>
                    {showExtraButtons &&
                    <IonCol>
                        <IonButton onClick={noAction}>No</IonButton>
                    </IonCol>
                    }
                </IonRow>
            </IonGrid>

        </IonModal>
    )
}

export default Modal;
