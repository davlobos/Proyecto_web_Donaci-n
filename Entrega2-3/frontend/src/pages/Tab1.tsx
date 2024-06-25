import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import { CampaignCard, NewCampaignCard } from "../components/CampaignCard";
import "./Tab1.css";
import { ICampaign, Response, User} from "../responses";
import { useEffect, useState } from "react";

interface Tab2Props {
  user: User | null;
}

const Tab1: React.FC<Tab2Props> = ({user}) => {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/campaigns", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response: Response<ICampaign[]>) => {
        if (!response.message && response.data) setCampaigns(response.data);
        else console.log(response.message);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NewCampaignCard/>
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign._id}
            id={campaign._id}
            title={campaign.title}
            subtitle={campaign.subtitle}
            isAdmin={user !== null ? user.admin : false}
          />
        ))}
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
