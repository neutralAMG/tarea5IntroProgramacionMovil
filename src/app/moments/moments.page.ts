import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.page.html',
  styleUrls: ['./moments.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MomentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
