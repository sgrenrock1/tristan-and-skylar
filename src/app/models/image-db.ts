import { IndexedImage } from './indexed-image';

export class ImageDB {
    mainGallery: IndexedImage[];

    constructor() {
        this.mainGallery = [
            {url: "assets/img/2015-02-11 col.jpg", index: 0, caption: "..." },
            {url: "assets/img/all 3.jpg", index: 1, caption: "..." },
            {url: "assets/img/mckenzie.jpg", index: 0, caption: "..." },
            {url: "assets/img/skylar.jpg", index: 0, caption: "..." },
            {url: "assets/img/tns.jpg", index: 0, caption: "..." },
            {url: "assets/img/tristan.jpg", index: 0, caption: "..." },
            {url: "assets/img/tristan-sexy.jpg", index: 0, caption: "..." },
            {url: "assets/img/two.jpg", index: 0, caption: "..." },
        ];
    }
}