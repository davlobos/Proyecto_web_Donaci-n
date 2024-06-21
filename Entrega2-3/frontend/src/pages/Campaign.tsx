import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonProgressBar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Campaign.css";
import { useEffect, useState } from "react";
import { ICampaign, Response } from "../responses";

interface CampaignParams {
  id: string;
}

const Campaign: React.FC = () => {
  const { id } = useParams<CampaignParams>();
  const [campaign, setCampaign] = useState<ICampaign>();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/api/campaigns/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response: Response<ICampaign>) => {
        if (!response.message && response.data) {
          setCampaign(response.data);
          console.log(response.data);
        } else console.log(response.message);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Campaign" />
          </IonButtons>
          <IonTitle>Campaña</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        {campaign ? (
          <div className="campaign-container">
            <h2 className="campaign-title">{campaign.title}</h2>
            <div>
              <p>{campaign.subtitle}</p>
            </div>

            <img
              className="campaign-image"
              src={campaign.imgURL}
              alt={campaign.title}
            />
            <div className="donation-container">
              <IonProgressBar
                value={campaign.progress / campaign.goal}
                color="success"
              ></IonProgressBar>
              <p>
                ${campaign.progress} donados de la meta: ${campaign.goal}
              </p>
              <IonButton>Dona</IonButton>
            </div>
          </div>
        ) : (
          <p>Campaign not found</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Campaign;
