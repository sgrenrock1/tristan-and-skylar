import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  salutation1: string;
  salutation2: string;
  salutation3: string;

  image1: string;
  image2: string;
  image3: string;
  constructor() { 
    this.salutation1 = this.randomMessage();
    do {
      this.salutation2 = this.randomMessage();
    }while(this.salutation2 == this.salutation1);
    do {
      this.salutation3 = this.randomMessage();
    }while(this.salutation3 == this.salutation1 || this.salutation3 == this.salutation2);

    this.image1 = this.randomImage();
    do {
      this.image2 = this.randomImage();
    }while(this.image2 == this.image1);
    do {
      this.image3 = this.randomImage();
    }while(this.image3 == this.image1 || this.image3 == this.image2);
  }


  ngOnInit() {
  }

  randomMessage(): string {
    var messages = [
      "This is the least cool site on the Net.",
      "Java, JavaScript -- SAME THING",
      "\"I'm.\" is a complete sentence.",
      "Be You'reself.",
      "This site runs best on IE6.",
      "There's nothing to do on this website."
    ];
    var min = 0;
    var max = messages.length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return messages[random];
  }

  randomImage(): string {
    var images = [
      "assets/arch-slider/01.jpeg",
      "assets/arch-slider/02.jpeg",
      "assets/arch-slider/03.jpeg",
      "assets/arch-slider/00.jpeg"
    ];
    var min = 0;
    var max = images.length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return images[random];
  }
}
