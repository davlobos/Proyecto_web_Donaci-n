import React from "react";
import {
  IonRouterLink,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import "./CampaignCard.css";
import {
  addCircleOutline,
  colorFillOutline,
  trashOutline,
} from "ionicons/icons";

interface ContainerProps {
  id: string;
  title: string;
  subtitle: string;
  isAdmin: boolean;
}

export const CampaignCard: React.FC<ContainerProps> = ({
  id,
  title,
  subtitle,
  isAdmin,
}) => {
  console.log(isAdmin);
  return (
    <IonCard className="card">
      <IonCardHeader>
        <IonCardTitle>
          {title}
          {isAdmin && (
            <IonIcon
              onClick={(e) => {
                fetch(`http://localhost:5000/api/campaigns/${id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((response) => response.json())
                  .then((response: any) => {
                    if (response.message) console.error(response.message);
                    else console.log("eliminada :)");
                  });
                window.location.reload();
              }}
              style={{ color: "#b1514c" }}
              aria-hidden="true"
              icon={trashOutline}
            />
          )}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{subtitle}</IonCardContent>
      <IonButton className="custom-button" fill="clear">
        <IonRouterLink routerLink={`/campaign/${id}`}>
          Ver más información
        </IonRouterLink>
      </IonButton>
    </IonCard>
  );
};

export const NewCampaignCard: React.FC = () => {
  return (
    <IonCard className="card">
      <IonCardHeader>
        <IonCardTitle>¿Quieres crear una campaña?</IonCardTitle>
      </IonCardHeader>
      <IonButton className="custom-button" fill="clear">
        <IonRouterLink routerLink={`/newcampaign/`}>
          <IonIcon aria-hidden="true" icon={addCircleOutline} />
          Crear campaña
        </IonRouterLink>
      </IonButton>
    </IonCard>
  );
};
