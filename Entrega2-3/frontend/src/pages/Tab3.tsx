import { IonRouterLink, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import '../theme/variables.css';
import './Tab3.css';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar sesión</IonTitle>
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
          <IonInput label="Nombre de usuario" labelPlacement="floating" fill="outline" placeholder="Nombre de usuario"></IonInput>
          <IonInput type="password" label="Contraseña" labelPlacement="floating" fill="outline" placeholder="Contraseña"></IonInput>
        </div>
          <div className="button-container">
            <IonButton>Ingresar</IonButton>
          </div>
          <p>¿No tienes una cuenta?</p>
          <div className="button-container">
            <IonButton fill="clear" className="registro">
              <IonRouterLink className="registerbtn" routerLink='/Register'>
                <b>Registrate Aquí.</b> 
              </IonRouterLink>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
