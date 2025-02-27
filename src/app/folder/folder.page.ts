import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,  } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { link } from 'ionicons/icons';
import { NgFor, CommonModule } from '@angular/common';

register()

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgFor, CommonModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  introData = [
    {
      title: "The Way of Kings",
      subtitle: "Kaladin's book",
      image: "assets/BookCovers/book1.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "https://www.amazon.com/dp/0765326353"
    },
    {
      title: "Words of Radiance",
      subtitle: "Shallan's book",
      image: "assets/BookCovers/book2.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "https://www.amazon.com/dp/0765365286"
    },
    {
      title: "Oathbringer",
      subtitle: "Dalinars's book",
      image: "assets/BookCovers/book3.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "https://www.amazon.com/dp/1250297141"
    },
    {
      title: "Rhythm of War",
      subtitle: "Venli's book",
      image: "assets/BookCovers/book4.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "https://www.amazon.com/dp/0765326388"
    },
    {
      title: "Wind and truth",
      subtitle: "Szeth's book",
      image: "assets/BookCovers/book5.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "https://www.amazon.com/dp/1250319188"
    },
  ]

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
