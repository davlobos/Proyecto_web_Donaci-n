import {
    IonRouterLink,
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonAlert,
  } from "@ionic/react";
  import "../theme/variables.css";
  import "./Tab3.css";
  import { Response, ICampaign } from "../responses";
  import { useState } from "react";
  
  const NewCampaign: React.FC = () => {
    const [created, setCreated] = useState(false);
  
    function handleSubmit(e: any) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
  
      console.log(formJson);
      fetch("http://localhost:5000/api/campaigns/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formJson,
          progress: 0,
        }),
      })
        .then((response) => response.json())
        .then((response: Response<ICampaign>) => {
          if (response.message) console.error(response.message);
          else {
            console.log("creada :)");
            setCreated(true);
          }
        });
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Nueva Campaña</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Nueva Campaña</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="input-container">
            <form onSubmit={handleSubmit}>
              <div>
                <IonInput
                  name="title"
                  label="Título"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Título"
                  required
                ></IonInput>
                <IonInput
                  name="subtitle"
                  label="Descripción"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Descripción"
                  required
                ></IonInput>
                <IonInput
                  name="imgURL"
                  label="URL imagen"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="URL imagen"
                  required
                ></IonInput>
                <IonInput
                  name="goal"
                  type="number"
                  label="Meta"
                  labelPlacement="floating"
                  fill="outline"
                  placeholder="Meta"
                  required
                ></IonInput>
              </div>
              <div className="button-container">
                <IonButton type="submit">Crear</IonButton>
              </div>
            </form>
            <IonAlert
              isOpen={created}
              header="Campaña creada"
              message="Campaña creada correctamente :)"
              buttons={[
                {
                  text: "OK",
                  handler: () => {
                    setCreated(false);
                    window.location.href = "/"; // Redirige a la página de inicio
                  },
                },
              ]}
            ></IonAlert>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default NewCampaign;
  