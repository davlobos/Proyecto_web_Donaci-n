import React, { useState, useEffect } from "react";
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
  IonSelect,
  IonSelectOption,
  IonAlert,
} from "@ionic/react";
import { caretDownSharp } from "ionicons/icons";
import "./Register.css";
import { Response, User } from "../responses";

const Register: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [comuna, setComuna] = useState<boolean>(false);
  const [region, setRegion] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [submit, setSubmit] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  useEffect(() => {
    setDisabled(!(toggle && comuna && region));
  }, [toggle, comuna, region]);

  function handleSubmit(e: any) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (formJson.password !== formJson.pass2) {
      setPasswordMismatch(true);
    } else {
      fetch("http://localhost:5000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formJson,
          admin: false,
          favoriteCampaigns: [],
        }),
      })
        .then((response) => response.json())
        .then((response: Response<User>) => {
          if (response.message) console.error(response.message);
          else {
            console.log("creada :)");
            setSubmit(true);
          }
        });
    }
  }

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
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div>
              <IonInput
                name="nombre"
                label="Nombre de usuario"
                labelPlacement="floating"
                fill="outline"
                placeholder="Nombre de usuario"
                required
              ></IonInput>
            </div>
            <div>
              <IonInput
                name="rut"
                label="RUT"
                labelPlacement="floating"
                fill="outline"
                placeholder="RUT"
                required
              ></IonInput>
            </div>
            <div>
              <IonInput
                name="email"
                label="Email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Email"
                required
              ></IonInput>
            </div>
            <div>
              <IonSelect
                onIonChange={(e) => setRegion(!!e.detail.value)}
                className="never-flip"
                toggleIcon={caretDownSharp}
                interface="popover"
                placeholder="Región"
                name="region"
              >
                <IonSelectOption value="3">Región de Atacama</IonSelectOption>
                <IonSelectOption value="5">
                  Región de Valparaíso
                </IonSelectOption>
                <IonSelectOption value="13">
                  Región Metropolitana
                </IonSelectOption>
              </IonSelect>
            </div>
            <div>
              <IonSelect
                onIonChange={(e) => setComuna(!!e.detail.value)}
                name="comuna"
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
                name="password"
                label="Contraseña"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                type="password"
                required
              ></IonInput>
            </div>
            <div>
              <IonInput
                name="pass2"
                label="Confirmar contraseña"
                labelPlacement="floating"
                fill="outline"
                placeholder="Confirmar contraseña"
                type="password"
                required
              ></IonInput>
            </div>
            <div>
              <IonToggle
                name="acceptTerms"
                color={"success"}
                labelPlacement="end"
                aria-required="true"
                onIonChange={() => setToggle((prevToggle) => !prevToggle)}
              >
                Acepto los términos y condiciones
              </IonToggle>
            </div>
            <IonButton type="submit" disabled={disabled}>
              Crear cuenta
            </IonButton>
          </div>
        </form>
        <IonAlert
          isOpen={submit}
          header="Usuario creado"
          message="Usuario creado correctamente :)"
          buttons={[
            {
              text: "OK",
              handler: () => {
                setSubmit(false);
                window.location.href = "/"; // Redirige a la página de inicio
              },
            },
          ]}
        ></IonAlert>
        <IonAlert
          isOpen={passwordMismatch}
          header="Error"
          message="Las contraseñas no coinciden."
          buttons={[
            {
              text: "OK",
              handler: () => {
                setPasswordMismatch(false);
              },
            },
          ]}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Register;
