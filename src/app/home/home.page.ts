import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButton, IonInput, IonText,} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTitle, IonContent, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButton, IonInput, IonText, FormsModule],
})
export class HomePage {

  edad:number = 0;
  resultado:string ='';

  constructor() {}

  ngOnInit(){

  }

  calcular() {
    let edadCanina:number = this.edad * 7;

    this.resultado =
    'La edad canina de su mascota es de ' + edadCanina + ' años';
  }
}
 