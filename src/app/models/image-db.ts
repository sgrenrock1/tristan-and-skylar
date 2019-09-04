import { IndexedImage } from './indexed-image';

export class ImageDB {
    mainGallery: IndexedImage[];

    constructor() {
        this.mainGallery = [
            {url: "assets/arch/00.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/01.jpeg", index: 1, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/02.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/03.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/04.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/05.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/06.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/07.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/08.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" },
            {url: "assets/arch/09.jpeg", index: 0, caption: "...", redirect: "https://www.google.com" }
        ];
    }
}