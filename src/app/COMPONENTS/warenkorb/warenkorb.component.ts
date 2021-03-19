import { Component, OnInit, Input } from '@angular/core';
import { WarenkorbService } from '../../SERVICES/warenkorb.service'
import { warenkorbModel } from "./warenkorb"
import { produktModel } from "../produkt/produkt"


@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})

export class WarenkorbComponent implements OnInit {
public warenkorbmodel : warenkorbModel
public produktModel : produktModel
public waren: warenkorbModel[] = []
changeCount:number;





  constructor(public warenkorb: WarenkorbService) {

   } 

  ngOnInit(): void {
  	this.getwarenkorb()
    
  }



  getwarenkorb(){
    let current_waren: produktModel[]
    current_waren = this.warenkorb.getWarenkorbItems();
    // console.log(current_waren)

    this.changeCount = this.warenkorb.getTotal();
    let count = 0
    let current: produktModel = {id:0, title: "", image: "", rating: 0, desc: "", price: 0} 
    
    //check if warenkorb is empty 
    if(current_waren != null){
    // current_waren.sort((a, b) => a.id-b.id)
      current_waren = current_waren.sort((a, b) => a.id-b.id)  

      for (let i = 0; i < current_waren.length; i++) {
        if (current_waren[i].id != current.id) {
              if (count > 0) {
                  this.waren.push({produkt:current, quantity:count });
              }
              current = current_waren[i];
              count = 1;
          } else {
              count++;
          }
      }
      if (count > 0) {
          this.waren.push({produkt:current, quantity:count });
      }
    }//check if warenkorb is empty ends


}


  priceCalc(p, q){
    return (p*q)

  }

  rabattCalc(v){
    let val = this.warenkorb.rabattCalculate(v) 
  }

changed(v){
  let val =v.target.value
  if(val>0)
  {
    let sum = this.warenkorb.getTotal()
    this.changeCount = sum-((val/100)*sum)
  }
  else{
   this.changeCount =  this.warenkorb.getTotal();
  }

}

    removeItem(p){

      let waren = this.waren
      let itemList = this.warenkorb.getWarenkorbItems()
      let index = this.waren.findIndex(x => x.produkt.id === p.produkt.id);
      this.waren.splice(index, 1) //delete items from shopping cart

     itemList = itemList.filter(item => item.id != p.produkt.id)

     localStorage.setItem('warenkorb', JSON.stringify(itemList)) //update shoping cart list 
     if(itemList !=null){
       let inputRabatt:number
       inputRabatt = parseInt((<HTMLInputElement>document.getElementsByClassName("inputRabatt")[0]).value)
       if(inputRabatt != null ){
         let sum = this.warenkorb.getTotal()
         this.changeCount = sum-((inputRabatt/100)*sum)
       }
        
     }




  }

}
