import { IonRouterLink, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import '../theme/variables.css';
import './Tab3.css';

import { Response, User } from "../responses";

const Tab3: React.FC = () => {
  function handleSubmit(e:any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },body: JSON.stringify(
        formJson
      ),
    })
    .then((response) => response.json())
    .then((response: Response<User>) => {
      if (response.message) console.error(response.message);
      else {
        console.log("Ingreso correcto");
        //setCreated(true);
      }
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
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
        <div>
          <IonInput name="email"  label="Correo electrónico" labelPlacement="floating" fill="outline" placeholder="Correo electrónico" required ></IonInput>
          <IonInput name="password" type="password" label="Contraseña" labelPlacement="floating" fill="outline" placeholder="Contraseña" required></IonInput>
        </div>
          <div className="button-container">
            <IonButton type='submit'>Ingresar</IonButton>
          </div>
          </form>


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
