import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,  IonButtons, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,  IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
