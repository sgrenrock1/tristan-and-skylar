import { Component, OnInit, Input, ResolvedReflectiveFactory } from '@angular/core';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})
export class GalleryImageComponent implements OnInit {
  @Input('url') url;
  @Input('caption') caption;
  @Input('index') index;
  @Input('redirect') redirect;
  constructor() { }

  ngOnInit() {
  }

}
