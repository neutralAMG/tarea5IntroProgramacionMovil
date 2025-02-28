
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, 
  archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, 
  homeSharp, homeOutline , bookSharp, bookOutline ,bodySharp , bodyOutline , keySharp, keyOutline , schoolSharp, schoolOutline  } from 'ionicons/icons';
import { StatusBar } from '@capacitor/status-bar';

StatusBar.setOverlaysWebView({overlay: false})
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'About', url: '/about', icon: 'book' },
    { title: 'Characters', url: '/characters', icon: 'body' },
    { title: 'Moments', url: '/moments', icon: 'heart' },
    { title: 'My Experience', url: '/my-experience', icon: 'key' },
    { title: 'Hire Me', url: '/hire-me', icon: 'school' },
  ];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, 
      trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp , homeSharp, homeOutline ,  bookSharp, bookOutline , 
      bodySharp , bodyOutline , keySharp, keyOutline , schoolSharp, schoolOutline  });
  }
}
