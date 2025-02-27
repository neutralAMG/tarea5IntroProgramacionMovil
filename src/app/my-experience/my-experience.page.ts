import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.page.html',
  styleUrls: ['./my-experience.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyExperiencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
