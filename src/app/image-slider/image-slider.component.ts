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
      "Skylar Roasky is your source for mid-tier quality mouse art.",
      "This is the least cool site on the Net.",
      "Send hate tweets to @TristyAndSkylar",
      "Java, JavaScript -- SAME THING",
      "\"I'm.\" is a complete sentence.",
      "Be You'reself.",
      "This site runs best on IE6.",
      "I😃suffer😃from😃same😃face😃syndrome.",
      "There's nothing to do on this website.",
      "I'm forking over $5.10/month to run this shit."
    ];
    var min = 0;
    var max = messages.length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return messages[random];
  }

  randomImage(): string {
    var images = [
      "assets/slider/01.jpg",
      "assets/slider/02.jpg",
      "assets/slider/03.jpg",
      "assets/slider/04.jpg",
      "assets/slider/05.jpg",
      "assets/slider/06.jpg",
      "assets/slider/07.jpg",
      "assets/slider/08.jpg",
      "assets/slider/09.jpg"
    ];
    var min = 0;
    var max = images.length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return images[random];
  }
}
