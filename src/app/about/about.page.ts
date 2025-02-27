import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,  IonButtons, IonMenuButton, IonTitle, IonToolbar ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,  IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
