import {IonApp, IonButton, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from "./pages/Login";
import RequestHelp from "./pages/RequestHelp";
import ViewHelpDetails from "./pages/ViewHelpDetails";
import LoginAccount from "./pages/LoginAccount";
import CreateAccount from "./pages/CreateAccount";
import ViewRequest from './components/ViewRequest';
import RequestDetails from './components/RequestDetails';
import AddRatingElderly from "./pages/AddRatingElderly";
import ViewHistoryElderly from "./pages/ViewHistoryElderly";
import HelpProvided from "./pages/HelpProvided";
import AddRatingElderlyWoman from "./pages/AddRatingElderlyWoman";
import AddRatingYoung from './components/AddRatingYoung';
import ViewHistoryHelper from "./pages/ViewHistoryHelper";
import HelpProvidedHelper from "./pages/HelpProvidedHelper";
import Payment from "./pages/Payment";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/*<Menu />*/}
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Home/>
            </Route>
            <Route path="/:id" exact={true}>
              <Home/>
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/login" exact={true}>
              <Login/>
            </Route>
            <Route path="/login/:name" exact={true}>
              <Login/>
            </Route>
            <Route path="/requestHelp" exact={true}>
              <RequestHelp/>
            </Route>
            <Route path="/requestHelp/:id" exact={true}>
              <RequestHelp/>
            </Route>
            <Route path="/requestHelp/:id/:help" exact={true}>
              <RequestHelp/>
            </Route>
            <Route path="/viewHelpDetails" exact={true}>
              <ViewHelpDetails/>
            </Route>
            <Route path="/viewHelpDetails/:id" exact={true}>
              <ViewHelpDetails/>
            </Route>
            <Route path="/viewHelpDetails/:id" exact={true}>
              <ViewHelpDetails/>
            </Route>
            <Route path="/loginAccount" exact={true}>
              <LoginAccount/>
            </Route>
            <Route path="/loginAccount/:name" exact={true}>
              <LoginAccount/>
            </Route>
            <Route path="/createAccount" exact={true}>
              <CreateAccount/>
            </Route>
            <Route path="/viewRequest" exact={true}>
              <ViewRequest/>
            </Route>
            <Route path="/viewRequest/:id" exact={true}>
              <ViewRequest/>
            </Route>
            <Route path="/requestDetails/" exact={true}>
              <RequestDetails/>
            </Route>
            <Route path="/requestDetails/:id" exact={true}>
              <RequestDetails/>
            </Route>
            <Route path="/addRatingElderly" exact={true}>
              < AddRatingElderly/>
            </Route>
            <Route path="/addRatingYoung" exact={true}>
              < AddRatingYoung/>
            </Route>
            <Route path="/addRatingElderly/:id" exact={true}>
              < AddRatingElderly/>
            </Route>
            <Route path="/addRatingElderlyWoman" exact={true}>
              < AddRatingElderlyWoman/>
            </Route>
            <Route path="/addRatingElderlyWoman/1" exact={true}>
              < AddRatingElderlyWoman/>
            </Route>
            <Route path="/viewHistoryElderly" >
              < ViewHistoryElderly/>
            </Route>

            <Route path="/viewHistoryHelper" exact={true}>
              < ViewHistoryHelper/>
            </Route>
            <Route path="/helpProvided" exact={true}>
              <HelpProvided />
            </Route>
            <Route path="/helpProvidedHelper" exact={true}>
              <HelpProvidedHelper />
            </Route>
            <Route path="/payment" exact={true}>
              <Payment />
            </Route>
            <Route path="/payment/:id" exact={true}>
              <Payment />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
