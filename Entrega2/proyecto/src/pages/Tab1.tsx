import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CampaignCard from '../components/CampaignCard';
import './Tab1.css';
import data from './campaigns.json';


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
        {data.map(campaigncard=><CampaignCard 
            title={campaigncard.title}
            subtitle={campaigncard.subtitle}
        />)}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
