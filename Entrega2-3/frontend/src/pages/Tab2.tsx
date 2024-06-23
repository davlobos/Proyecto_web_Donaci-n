import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {CampaignCard} from '../components/CampaignCard';
import './Tab2.css';
import data from './campaigns.json';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle >Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {data.map(campaigncard => 
          campaigncard.fav && (
            <CampaignCard 
              key={campaigncard.id} 
              id={campaigncard.id}
              title={campaigncard.title}
              subtitle={campaigncard.subtitle}
            />
          )
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
