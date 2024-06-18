import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonToggle,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { caretDownSharp } from "ionicons/icons";
import "./Register.css";

const Register: React.FC = () => {
  const signup = () => {
    console.log("Signup");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Tab3" />
          </IonButtons>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="input-container">
          <div>
            <IonInput
              label="Nombre de usuario"
              labelPlacement="floating"
              fill="outline"
              placeholder="Nombre de usuario"
            ></IonInput>
          </div>
          <div>
            <IonInput
              label="RUT"
              labelPlacement="floating"
              fill="outline"
              placeholder="RUT"
            ></IonInput>
          </div>
          <div>
            <IonInput
              label="Email"
              labelPlacement="floating"
              fill="outline"
              placeholder="Email"
            ></IonInput>
          </div>
          <div>
            <IonSelect
              className="never-flip"
              toggleIcon={caretDownSharp}
              interface="popover"
              placeholder="Región"
            >
              <IonSelectOption value="3">Región de Atacama</IonSelectOption>
              <IonSelectOption value="5">Región de Valparaíso</IonSelectOption>
              <IonSelectOption value="13">Región Metropolitana</IonSelectOption>
            </IonSelect>
          </div>
          <div>
            <IonSelect
              className="never-flip"
              toggleIcon={caretDownSharp}
              interface="popover"
              placeholder="Comuna"
            >
              <IonSelectOption value="1">Viña del Mar</IonSelectOption>
              <IonSelectOption value="2">Valparaíso</IonSelectOption>
              <IonSelectOption value="3">Copiapó</IonSelectOption>
              <IonSelectOption value="4">Quilpué</IonSelectOption>
            </IonSelect>
          </div>
          <div>
            <IonInput
              label="Contraseña"
              labelPlacement="floating"
              fill="outline"
              placeholder="Contraseña"
            ></IonInput>
          </div>
          <div>
            <IonInput
              label="Confirmar contraseña"
              labelPlacement="floating"
              fill="outline"
              placeholder="Confirmar contraseña"
            ></IonInput>
          </div>
          <div>
            <IonToggle color={"success"} labelPlacement="end">
              Acepto los términos y condiciones
            </IonToggle>
          </div>
          <IonButton onClick={signup}>Crear cuenta</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
