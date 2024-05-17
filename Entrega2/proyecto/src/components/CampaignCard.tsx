import React from 'react';
import { Route } from 'react-router';
import { IonRouterLink ,IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './CampaignCard.css';
import Campaign from '../pages/Campaign';

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
          <IonButton className ="custom-button" fill="clear" >
          
            <IonRouterLink routerLink='/Campaign'>
              Ver más información
              </IonRouterLink>
            </IonButton>
          
        </IonCard>
      );
  };
export default CampaignCard;