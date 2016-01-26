import {Component} from 'angular2/core'

export interface SignatureData {
    id: number;
    image: string;
    creator: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <canvas id="pad"></canvas>
    <div>
        <label>Drawn By: </label>
        <div><input [(ngModel)]="signature.creator" placeholder="name"></div>
    </div>
    `
})
export class AppComponent {
    public title = "Digit Recognition"
    public signature: SignatureData = {
        id: 1,
        image: "",
        creator: ""
    }

    var canvas = document.querySelector("canvas");

    var signaturePad = new SignaturePad(canvas);

}

