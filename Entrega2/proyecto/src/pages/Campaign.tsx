import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Campaign.css';
import data from './campaigns.json';

const Campaign: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Campaign</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                <IonTitle size="large">Campaign</IonTitle>
                </IonToolbar>
            </IonHeader>
            AAAAAAAAAAAAAAAAA
            </IonContent>
        </IonPage>
    );
};

export default Campaign;