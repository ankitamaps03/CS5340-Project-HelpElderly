import React, {useState} from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
    IonButton,
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
import {useHistory, useParams} from "react-router-dom";
import TopPageHeader from "../components/TopPageHeader";

const Payment = () => {

    const [cvc, setCvc] = useState("")
    const [expiry, setExpiry] = useState("")
    const [focus, setFocus] = useState()
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    let history = useHistory();

    let params = {
        id: ''
    }
    params = useParams();
    let isLogin = false;
    if (params.id) {
        isLogin = true;
    }
    const handleInputFocus = (e: any) => {
        setFocus(e.target.name);
    }

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;

        setNumber(value);
    }

    const redirectToHelperPage = () => {
        history.push('/viewHelpDetails/1')
    }

    return (
        <IonPage>
            <TopPageHeader isLogin={isLogin} />
            <IonContent>
                <ButtonForBack/>
                <ButtonForHome/>
                <Header name="Make payment" icon={cashSharp}/>
                <div id="PaymentForm" className='payment-main'>
                    <IonCard style={{height: "100%", width:"100%"}}>
                        <IonCardHeader>
                            <IonCardSubtitle>Please make a payment using Credit/Debit card</IonCardSubtitle>
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
                                        placeholder="Valid through (Enter in MM/YY format)"
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
                                < br />
                                <IonButton
                                    onClick={redirectToHelperPage}
                                    color="primary">
                                    Make payment
                                </IonButton>
                            </form>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
)
}
export default Payment;
