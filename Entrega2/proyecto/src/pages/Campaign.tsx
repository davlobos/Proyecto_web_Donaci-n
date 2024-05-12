import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Campaign.css';
const Campaign: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Inicio</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                <IonTitle size="large">Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Tab 1 page" />
            </IonContent>
        </IonPage>
    );
};

export default Campaign;