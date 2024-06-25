import { useState } from 'react';
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
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import '../theme/variables.css';
import './Tab3.css';

import { Response, User } from "../responses";

const Tab3: React.FC<{ setUser: (user: User | null) => void }> = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  function handleSubmit(e: any) {
    e.preventDefault();

    const formJson = { email, password };

    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    })
    .then((response) => response.json())
    .then((response: Response<User>) => {
      if (response.message) {
        setErrorMessage(response.message);
        setShowErrorAlert(true);
      } else if (response.data) {
        setUser(response.data);
        history.push('/profile');
      } else {
        setErrorMessage('Respuesta inesperada del servidor');
        setShowErrorAlert(true);
      }
    })
    .catch((error) => {
      setErrorMessage('Error en la comunicación con el servidor');
      setShowErrorAlert(true);
    });
  }

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
            <IonTitle size="large">Iniciar sesión</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <div>
              <IonInput
                name="email"
                label="Correo electrónico"
                labelPlacement="floating"
                fill="outline"
                placeholder="Correo electrónico"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)}
                required
              ></IonInput>
              <IonInput
                name="password"
                type="password"
                label="Contraseña"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
                required
              ></IonInput>
            </div>
            <div className="button-container">
              <IonButton type="submit">Ingresar</IonButton>
            </div>
          </form>
          <p>¿No tienes una cuenta?</p>
          <div className="button-container">
            <IonButton fill="clear" className="registro">
              <IonRouterLink className="registerbtn" routerLink="/Register">
                <b>Registrate Aquí.</b>
              </IonRouterLink>
            </IonButton>
          </div>
        </div>
        <IonAlert
          isOpen={showErrorAlert}
          header="Error"
          message={errorMessage}
          buttons={[
            {
              text: "OK",
              handler: () => {
                setShowErrorAlert(false);
              },
            },
          ]}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
