import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heartOutline, homeOutline, personCircleOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Campaign from './pages/Campaign';
import NewCampaign from './pages/NewCampaign';
import Register from './pages/Register';
import Profile from './pages/Profile';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';
import { User } from './responses';

setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 user={user} />
            </Route>
            <Route exact path="/tab3">
              <Tab3 setUser={setUser} />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
            <Route exact path="/campaign/:id">
              <Campaign />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/newcampaign">
              <NewCampaign />
            </Route>
            <Route exact path="/profile">
              {user ? <Profile user={user} /> : <Redirect to="/tab3" />}
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={heartOutline} />
              <IonLabel>Favoritos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href={user ? "/profile" : "/tab3"}>
              <IonIcon aria-hidden="true" icon={personCircleOutline} />
              <IonLabel>Mi cuenta</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
