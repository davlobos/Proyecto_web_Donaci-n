import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { CampaignCard } from '../components/CampaignCard';
import './Tab2.css';
import data from './campaigns.json';
import { User } from '../responses';

interface Tab2Props {
  user: User | null;
}

const Tab2: React.FC<Tab2Props> = ({ user }) => {
  const favoriteCampaigns = user ? data.filter(campaign => user.favoriteCampaigns.includes(campaign.id)) : [];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favoritos</IonTitle>
          </IonToolbar>
        </IonHeader>
        {favoriteCampaigns.length > 0 ? (
          favoriteCampaigns.map(campaign => (
            <CampaignCard 
              key={campaign.id} 
              id={campaign.id}
              title={campaign.title}
              subtitle={campaign.subtitle}
            />
          ))
        ) : (
          <p>No hay campañas favoritas.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
