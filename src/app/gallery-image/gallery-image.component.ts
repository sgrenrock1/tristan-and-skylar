import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})
export class GalleryImageComponent implements OnInit {
  @Input('url') url;
  @Input('caption') caption;
  @Input('index') index;
  constructor() { }

  ngOnInit() {
  }

}
