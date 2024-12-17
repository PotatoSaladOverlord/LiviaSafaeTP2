import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-film1',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './film1.component.html',
  styleUrl: './film1.component.scss'
})
export class Film1Component {

}
