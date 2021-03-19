import { Component, OnInit, Input } from '@angular/core';
import { WarenkorbService} from '../../SERVICES/warenkorb.service'
import {produktModel} from "./produkt"

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {
  public produktmodel: produktModel
   @Input() produkts: produktModel[] = [];

  constructor(private Warekorb: WarenkorbService) { }

  // constructor() { }

  ngOnInit(): void {  }

  addToCart(pro){
    this.Warekorb.addProdukt(pro)
  }

}
