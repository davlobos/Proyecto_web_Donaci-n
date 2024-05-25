import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Campaign.css';
import data from './campaigns.json';

interface CampaignParams {
    id: string;
}

const Campaign: React.FC = () => {
    const { id } = useParams<CampaignParams>();
    const campaign = data.find(c => c.id === parseInt(id));

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                    <IonBackButton defaultHref='/Campaign' />
                    </IonButtons>
                    <IonTitle>Campaña</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                </IonHeader>
                {campaign ? (
                    <div className="campaign-container">
                        <h2 className="campaign-title">{campaign.title}</h2>
                        <p>{campaign.subtitle}</p>
                        <img className="campaign-image" src={campaign.imgURL} alt={campaign.title} />
                    </div>
                ) : (
                    <p>Campaign not found</p>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Campaign;

