import { Component, OnInit } from '@angular/core';
import { IndexedImage } from '../models/indexed-image';
import { ImageDB } from '../models/image-db';
import { ExpandedGalleryComponent } from '../expanded-gallery/expanded-gallery.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  
  imageDB: ImageDB = new ImageDB();

  imageArr: IndexedImage[][];
  column1: IndexedImage[];
  column2: IndexedImage[];
  column3: IndexedImage[];
  column4: IndexedImage[];
  xl = false;
  lg = false;
  md = false;
  xs = false;
  expand = false;
  numCols;

  constructor() {
    this.drawWindow();
  }

  ngOnInit() {
  }
  drawWindow() {
    this.xl = false;
    this.lg = false;
    this.md = false;
    this.xs = false;
    this.checkScreenSize()
    this.createColumns();
  }

  checkScreenSize() {
    if(window.innerWidth >= 1200) {
      this.numCols = 4;
      this.xl = true;
    }
    else if(window.innerWidth >= 992) {
      this.numCols = 3;
      this.lg = true;
    }
    else if(window.innerWidth >= 768) {
      this.numCols = 2;
      this.md = true;
    }
    else {
      this.numCols = 1;
      this.xs = true;
    }
  }

  createColumns() {
    let index = 0;
    this.imageArr = [];
    for(let j = 0; j < this.numCols; j++){
      this.imageArr[j] = [];
    }
    let length = this.imageDB.mainGallery.length;
    for(let i = 0; i < Math.ceil(length/this.numCols); i++) {
      for(let j = 0; j < this.numCols; j++) {
        if(this.imageDB.mainGallery[index]) {
          let img: IndexedImage = this.imageDB.mainGallery[index];
          this.imageArr[j][i] = img;
          index++;
        }
      }
    }
    this.column1 = this.imageArr[0];
    this.column2 = this.imageArr[1];
    this.column3 = this.imageArr[2];
    this.column4 = this.imageArr[3];
  }

  expandGallery() {
    let expanded: ExpandedGalleryComponent = new ExpandedGalleryComponent(0, this.imageDB.mainGallery);
    
  }
}
