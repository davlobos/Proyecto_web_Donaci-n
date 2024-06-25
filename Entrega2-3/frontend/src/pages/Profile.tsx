import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  } from '@ionic/react';
  import { useHistory } from 'react-router-dom';
  import { User } from '../responses';
  import './Profile.css';
  
  const Profile: React.FC<{ user: User; setUser: (user: User | null) => void }> = ({ user, setUser }) => {
    const history = useHistory();
  
    const handleLogout = () => {
      setUser(null);
      history.push('/tab3'); // Redirige a la página de inicio de sesión
      window.location.reload(); 
    };
  
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
            <p>Región: {user.region}</p>
            <p>Comuna: {user.comuna}</p>
            <p>RUT: {user.rut}</p>
            <IonButton expand="full" onClick={handleLogout}>
              Cerrar sesión
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;
  