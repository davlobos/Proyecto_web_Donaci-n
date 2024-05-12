import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CampaignCard from '../components/CampaignCard';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CampaignCard title = "Gatitos tristes" subtitle = "Hay muchos gatitos tristes que necesitan dinero :c"/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
