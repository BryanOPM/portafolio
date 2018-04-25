import { Component } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styles: []
})
export class FootersComponent {

anio:number = new Date().getFullYear();

constructor(public _is:InformacionService ){ }


}
