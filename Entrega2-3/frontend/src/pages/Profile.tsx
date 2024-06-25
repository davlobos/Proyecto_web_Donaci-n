import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import { User } from '../responses';
  import './Profile.css';
  
  const Profile: React.FC<{ user: User }> = ({ user }) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Perfil</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="profile-container">
            <h2>{user.nombre}</h2>
            <p>Email: {user.email}</p>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;
  