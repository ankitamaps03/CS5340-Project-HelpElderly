import {IonButton, IonCol, IonGrid, IonModal, IonRow} from "@ionic/react";
import React from "react";
import './Modal.css'

type ModalProps = {
    showModal: boolean
    yesAction: () => void,
    noAction: () => void,
    closeModal: () => void,
    bodyText: string
}

const Modal = ({yesAction, noAction, showModal, closeModal, bodyText}: ModalProps) => {


    return (
        <IonModal
            showBackdrop
            isOpen={showModal}
            cssClass='my-custom-class'>
            <IonButton onClick={() => closeModal}>Close Modal</IonButton>
            <p>{bodyText}</p>
            <IonGrid>
                <IonRow>
                    <IonCol size="6">
                        <IonButton onClick={yesAction}>Yes</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton onClick={noAction}>No</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonModal>
    )
}

export default Modal;
