import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.page.html',
  styleUrls: ['./hire-me.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,]
})
export class HireMePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
