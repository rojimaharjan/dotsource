import { Component } from '@angular/core';
import { WarenkorbService } from 'src/app/SERVICES/warenkorb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dotSource';
  constructor(public Warekorb: WarenkorbService) { } 
}
