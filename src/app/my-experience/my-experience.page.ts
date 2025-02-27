import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.page.html',
  styleUrls: ['./my-experience.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MyExperiencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
