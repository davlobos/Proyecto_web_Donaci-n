import React, { useState } from 'react';
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
} from "@ionic/react";
import { caretDownSharp } from "ionicons/icons";
import "./Register.css";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    email: "",
    region: "",
    comuna: "",
    pass: "",
    pass2: "",
    acceptTerms: false,
  });

  const handleChange = (event: any) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const signup = () => {
    if (formData.name==="" || formData.rut===""  || formData.email===""  || formData.region===""  || formData.comuna===""  || formData.pass===""  || formData.pass2===""  || !formData.acceptTerms) {
      alert('Por favor completa todos los campos y asegurate de aceptar los términos y condiciones.');
      return;
    }else{

    }
    console.log(formData); // Aquí puedes acceder a los valores del formulario
    // Lógica para enviar los datos al servidor o hacer lo que necesites
  };

  // Verifica si los términos y condiciones han sido aceptados
  const isTermsAccepted = formData.acceptTerms;

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
        <form>
          <div className="input-container">
            <div>
              <IonInput
                name="name"
                label="Nombre de usuario"
                labelPlacement="floating"
                fill="outline"
                placeholder="Nombre de usuario"
                aria-required="true"
              ></IonInput>
            </div>
            <div>
              <IonInput
                name="rut"
                label="RUT"
                labelPlacement="floating"
                fill="outline"
                placeholder="RUT"
                aria-required="true"
              ></IonInput>
            </div>
            <div>
              <IonInput
                name="email"
                label="Email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Email"
                aria-required="true"
              ></IonInput>
            </div>
            <div>
              <IonSelect
                className="never-flip"
                toggleIcon={caretDownSharp}
                interface="popover"
                placeholder="Región"
                aria-required="true"
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
                name="comuna"
                aria-required="true"
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
                name="pass"
                label="Contraseña"
                labelPlacement="floating"
                fill="outline"
                placeholder="Contraseña"
                type="password"
                aria-required="true"
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
                aria-required="true"
              ></IonInput>
            </div>
            <div>
              <IonToggle
                name="acceptTerms"
                checked={formData.acceptTerms}
                onIonChange={handleChange}
                color={"success"}
                labelPlacement="end"
                aria-required="true"
              >
                Acepto los términos y condiciones
              </IonToggle>
            </div>
            <IonButton onClick={signup} disabled={!isTermsAccepted}>
              Crear cuenta
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
