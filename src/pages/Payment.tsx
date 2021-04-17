import React, {useState} from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import './Payment.css';
import ButtonForBack from "../components/ButtonForBack";
import ButtonForHome from "../components/ButtonForHome";
import {cashSharp} from "ionicons/icons";
import Header from "../components/Header";

const Payment = () => {

    const [cvc, setCvc] = useState("")
    const [expiry, setExpiry] = useState("")
    const [focus, setFocus] = useState()
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")


    const handleInputFocus = (e: any) => {
        setFocus(e.target.name);
    }

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;

        setNumber(value);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="head">
                    <IonTitle>Login to Help Elderly</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <ButtonForBack/>
                <ButtonForHome/>
                <Header name="Add payment details" icon={cashSharp}/>
                <div id="PaymentForm" className='payment-main'>
                    <IonCard style={{height: "100%", width:"100%"}}>
                        <IonCardHeader>
                            <IonCardSubtitle>Please make a payment using the below options</IonCardSubtitle>
                            <IonCardTitle>The amount to be paid to Bob Marley: $55</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <Cards
                                cvc={cvc}
                                expiry={expiry}
                                name={name}
                                focused={focus}
                                number={number}
                                preview
                                issuer='visa'
                            />
                            <br/>
                            <form>
                                <input
                                    className='card-details'
                                    type="tel"
                                    name="number"
                                    placeholder="Card Number"
                                    onChange={(e) => setNumber(e.target.value)}
                                    onFocus={handleInputFocus}
                                />
                                <br/>
                                <input
                                    className='card-details'
                                    type="tel"
                                    name="name"
                                    placeholder="Name on the card"
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={handleInputFocus}
                                />
                                <br/>
                                <div className='card-small'>
                                    <input
                                        className='card-details-small'
                                        type="tel"
                                        name="expiry"
                                        placeholder="Valid through"
                                        onChange={(e) => setExpiry(e.target.value)}
                                        onFocus={handleInputFocus}
                                    />
                                    <input
                                        className='card-details-small'
                                        type="tel"
                                        name="cvc"
                                        placeholder="CVC"
                                        onChange={(e) => setCvc(e.target.value)}
                                        onFocus={handleInputFocus}
                                    />
                                </div>

                            </form>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
)
}
export default Payment;
