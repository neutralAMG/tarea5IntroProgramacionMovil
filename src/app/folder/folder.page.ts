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
      title: "title1",
      subtitle: "subtitle",
      image: "https://i.ebayimg.com/images/g/b-kAAOSwHsllc2ma/s-l1200.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "link"
    },
    {
      title: "title2",
      subtitle: "subtitle",
      image: "https://i.ebayimg.com/images/g/b-kAAOSwHsllc2ma/s-l1200.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "link"
    },
    {
      title: "title3",
      subtitle: "subtitle",
      image: "https://i.ebayimg.com/images/g/b-kAAOSwHsllc2ma/s-l1200.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "link"
    },
    {
      title: "title4",
      subtitle: "subtitle",
      image: "https://i.ebayimg.com/images/g/b-kAAOSwHsllc2ma/s-l1200.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "link"
    },
    {
      title: "title5",
      subtitle: "subtitle",
      image: "https://i.ebayimg.com/images/g/b-kAAOSwHsllc2ma/s-l1200.jpg",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores quia, facere ut commodi adipisci expedita voluptatum dicta esse corporis assumenda, eveniet voluptates inventore magni, sunt necessitatibus minima beatae maxime impedit?",
      link: "link"
    },
  ]

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
