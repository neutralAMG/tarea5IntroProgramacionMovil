import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register()
@Component({
  selector: 'app-moments',
  templateUrl: './moments.page.html',
  styleUrls: ['./moments.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MomentsPage implements OnInit {

  constructor() { }

  moments: Array<moment>=[ {
    name: "Kaladin's second ideal",
    book: 1,
    image: "assets/Moments/Images/xa45fei3txr51.jpg",
    video: "assets/Moments/Videos/momentBook1Num1.mp4",
  },{
    name: "Dalinar gives up his shardblade",
    book: 1,
    image: "assets/Moments/Images/WOKLB_-_Part4_End_by_Steve_Argyle.jpg",
    video: "assets/Moments/Videos/momentBook1Num2.mp4",
  },{
    name: "Kaladin comes to defeat sezth",
    book: 2,
    image: "assets/Moments/Images/Pink and White Simple Influencer Account Recommendation Instagram Story.jpg",
    video: "assets/Moments/Videos/momentBook2.mp4",
  } ]

  isModalOpen = false;
  selectedMoment: moment | undefined; // Ensure this has data
  
  setOpen(moment: any) {
    this.selectedMoment = moment;
    if(this.selectedMoment){
      const video = document.getElementById("video") as HTMLVideoElement;
      video.pause()
      video.currentTime = 0
      video.load()
    }
      
    this.isModalOpen = true;
  }
  
  setClose() {
    this.isModalOpen = false;
    this.selectedMoment = undefined;
  }
  ngOnInit() {
  }

}

type moment = {
  name: string
  book: number
  image: string
  video: string
}