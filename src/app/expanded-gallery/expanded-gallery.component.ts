import { Component, OnInit } from '@angular/core';
import { IndexedImage } from '../models/indexed-image'

@Component({
  selector: 'expanded-gallery',
  templateUrl: './expanded-gallery.component.html',
  styleUrls: ['./expanded-gallery.component.css']
})
export class ExpandedGalleryComponent implements OnInit {

  image: IndexedImage;

  constructor(private startingIndex: number, private gallery: IndexedImage[]) { 
    this.drawWindow(startingIndex);
  }

  next() {
    if(this.image.index + 1 == this.gallery.length) {
      this.drawWindow(0);
    }
  }

  prev() {
    if(this.image.index == 0) {
      this.drawWindow(this.gallery.length - 1);
    }
  }

  drawWindow(index: number) {
    this.image = this.gallery[index];
  }

  ngOnInit() {
  }

}
