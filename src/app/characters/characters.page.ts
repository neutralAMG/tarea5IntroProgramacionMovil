import { Component, OnInit } from '@angular/core';
import { CommonModule , NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,  IonButtons, IonMenuButton, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCol, IonGrid, IonRow,  IonModal,   ItemReorderEventDetail,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgFor, IonCol, IonGrid, IonRow, IonModal,
    IonItem,
    IonLabel,
    IonList,
    IonReorder,
    IonReorderGroup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CharactersPage implements OnInit {
   stormlightCharacters: Array<Charcter> = [
    {
      name: "Kaladin Stormblessed",
      race: "Human",
      order: "Windrunner",
      spren: "Sylphrena",
      abilities: ["Gravitation", "Adhesion", "Stormlight Healing"],
      home: "Alethkar",
      role: "Soldier, Surgeon, Radiant",
      image: "https://uploads.coppermind.net/thumb/Parting_the_Highstorm_by_Esther_Schrader.jpg/300px-Parting_the_Highstorm_by_Esther_Schrader.jpg",
      description: "A former slave turned legendary Windrunner, Kaladin struggles with his past while protecting those who cannot protect themselves."
    },
    {
      name: "Dalinar Kholin",
      race: "Human",
      order: "Bondsmith",
      spren: "The Stormfather",
      abilities: ["Tension", "Adhesion", "Unite Others"],
      home: "Alethkar",
      role: "Highprince, Bondsmith, Military Leader",
      image: "https://example.com/dalinar.jpg",
      description: "The Blackthorn, a once-brutal warlord seeking redemption, now leads as a Bondsmith striving to unite Roshar against its greatest threats."
    },
    {
      name: "Shallan Davar",
      race: "Human",
      order: "Lightweaver",
      spren: "Pattern",
      abilities: ["Illumination", "Transformation", "Memories"],
      home: "Vedenar",
      role: "Scholar, Spy, Radiant",
      image: "https://example.com/shallan.jpg",
      description: "A brilliant scholar with a troubled past, Shallan hides behind different identities while mastering the power of Lightweaving."
    },
    {
      name: "Adolin Kholin",
      race: "Human",
      order: "None (Shardbearer)",
      spren: "Maya (Deadeye)",
      abilities: ["Expert Duelist", "Shardbearer"],
      home: "Alethkar",
      role: "Highprince's Heir, Soldier",
      image: "https://example.com/adolin.jpg",
      description: "A skilled duelist and heir to House Kholin, Adolin fights with honor and is determined to do what is right, even when it challenges tradition."
    },
    {
      name: "Jasnah Kholin",
      race: "Human",
      order: "Elsecaller",
      spren: "Ivory",
      abilities: ["Transportation", "Transformation", "Scholarship"],
      home: "Alethkar",
      role: "Scholar, Queen of Alethkar",
      image: "https://example.com/jasnah.jpg",
      description: "A fearless scholar and Queen of Alethkar, Jasnah wields immense knowledge and power, unafraid to challenge belief systems."
    },
    {
      name: "Navani Kholin",
      race: "Human",
      order: "None",
      spren: "None",
      abilities: ["Engineering", "Fabrial Creation", "Tactician"],
      home: "Alethkar",
      role: "Scholar, Queen, Artifabrian",
      image: "https://example.com/navani.jpg",
      description: "A brilliant artifabrian and strategist, Navani is a powerful leader who pushes the boundaries of fabrial technology to aid in the war effort."
    },
    {
      name: "Szeth son-son-Vallano",
      race: "Human",
      order: "Skybreaker",
      spren: "Nightblood",
      abilities: ["Gravitation", "Division", "Stormlight Healing"],
      home: "Shinovar",
      role: "Assassin, Truthless, Knight Radiant",
      image: "https://example.com/szeth.jpg",
      description: "Once known as the Assassin in White, Szeth is burdened by guilt and duty, wielding the powerful and dangerous sword, Nightblood."
    },
    {
      name: "Lift",
      race: "Human",
      order: "Edgedancer",
      spren: "Wyndle",
      abilities: ["Progression", "Abrasion", "Converts Food to Stormlight"],
      home: "Reshi Isles",
      role: "Thief, Knight Radiant",
      image: "https://example.com/lift.jpg",
      description: "A mischievous and unpredictable Edgedancer, Lift has the unique ability to convert food into Stormlight, making her a powerful but quirky Radiant."
    },
    {
      name: "Venli",
      race: "Listener",
      order: "Willshaper",
      spren: "Timbre",
      abilities: ["Transportation", "Cohesion", "Forms of Power"],
      home: "Shattered Plains",
      role: "Scholar, Revolutionary, Radiant",
      image: "https://example.com/venli.jpg",
      description: "A once-ambitious scholar of the Listeners, Venli struggles with her past decisions as she embraces the path of the Willshapers."
    },
    {
      name: "Taravangian",
      race: "Human",
      order: "None",
      spren: "None",
      abilities: ["Genius on Some Days", "King", "Manipulator"],
      home: "Kharbranth",
      role: "King, Ruler of the Diagram",
      image: "https://example.com/taravangian.jpg",
      description: "A ruler whose intelligence fluctuates daily, Taravangian created the Diagram to save humanity—though his methods are questionable."
    }
  ];

  selectedCharacter: Charcter | undefined = undefined;
  isModalOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
setOpen(index: number){
  this.selectedCharacter = this.stormlightCharacters[index]
  this.isModalOpen = !this.isModalOpen
}
setClose(){
  this.selectedCharacter = undefined;
  this.isModalOpen = !this.isModalOpen
}

handleReorder(event: CustomEvent<ItemReorderEventDetail>){
const fromIndex = event.detail.from;
const toIndex = event.detail.to;

const movedItem = this.stormlightCharacters.splice(fromIndex,1)[0];
this.stormlightCharacters.splice(toIndex, 0,movedItem)

  event.detail.complete();
}
}
 type Charcter = {
    name: string,
    race: string,
    order: string,
    spren: string,
    abilities: Array<string>
    home: string,
    role: string,
    image: string,
    description: string
  }