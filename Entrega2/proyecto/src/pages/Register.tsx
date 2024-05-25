import { IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import './Register.css';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
          <IonBackButton defaultHref='/Tab3' />
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
        <IonInput label="Nombre de usuario" labelPlacement="floating" fill="outline" placeholder="Nombre de usuario"></IonInput>
        <IonInput label="RUT" labelPlacement="floating" fill="outline" placeholder="RUT"></IonInput>
        <IonInput label="Email" labelPlacement="floating" fill="outline" placeholder="Email"></IonInput>
        <IonInput label="Contraseña" labelPlacement="floating" fill="outline" placeholder="Contraseña"></IonInput>
        <IonInput label="Confirmar contraseña" labelPlacement="floating" fill="outline" placeholder="Confirmar contraseña"></IonInput>
        <IonButton> Crear</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;