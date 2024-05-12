import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './CampaignCard.css';

interface ContainerProps {
    title: string;
    subtitle: string;
}

const CampaignCard: React.FC<ContainerProps> = ({ title, subtitle }) => {
    return (
        <IonCard className = "card">
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{subtitle}</IonCardContent>
          <IonButton fill="clear">Ver más información</IonButton>
        </IonCard>
      );
  };
export default CampaignCard;