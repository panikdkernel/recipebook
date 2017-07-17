export class Recipe {
    name: string;
    desc: string;
    imageURL: string;

    constructor(name: string, desc: string, imageURL: string){
        this.name = name;
        this.desc = desc;
        this.imageURL = imageURL;
    }
}