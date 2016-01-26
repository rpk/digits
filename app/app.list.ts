import {Component} from 'angular2/core'
import {SignatureData} from "./app.component";

@Component({
    selector: 'my-app-list',
    template: `
    <h1>Submitted Images</h1>
    <ul class="images">
        <li *ngFor="#signature of signatures">
            <span class="image"><img src="{{signature.image}}" /> </span> {{signature.creator}}
        </li>
    </ul>
    `
})

export class SignatureList {
    public signatures = SIGNATURES;
}

var SIGNATURES: SignatureData[] = []