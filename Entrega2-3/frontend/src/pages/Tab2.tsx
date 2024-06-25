import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { CampaignCard } from '../components/CampaignCard';
import './Tab2.css';
import { User, ICampaign, Response } from '../responses';

interface Tab2Props {
  user: User | null;
}

const Tab2: React.FC<Tab2Props> = ({ user }) => {
  const [favoriteCampaigns, setFavoriteCampaigns] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/users/${user._id}/favorites`)
        .then(response => response.json())
        .then((data: Response<ICampaign[]>) => {
          if (data.message) {
            setError(data.message);
          } else {
            setFavoriteCampaigns(data.data || []); // Asegúrate de que data.data sea un array
          }
          setLoading(false);
        })
        .catch(err => {
          setError('Error fetching favorite campaigns');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Favoritos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>Loading...</IonContent>
      </IonPage>
    );
  }

  if (error) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Favoritos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>{error}</IonContent>
      </IonPage>
    );
  }

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
              key={campaign._id} 
              id={campaign._id}
              title={campaign.title}
              subtitle={campaign.subtitle}
              isAdmin={user !== null ? user.admin : false}
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
