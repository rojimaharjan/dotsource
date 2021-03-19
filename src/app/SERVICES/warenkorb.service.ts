import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
	Warekorb_items:any [] =[];
  waren : any[];



  constructor() { }
  addProdukt =(produkt)=>{
  	let items = this.getWarenkorbItems();
  	if(items){
  		items.push(produkt)
  		localStorage.setItem('warenkorb', JSON.stringify(items))
  	}
  	else{
  		this.Warekorb_items.push(produkt);
  		localStorage.setItem('warenkorb', JSON.stringify(this.Warekorb_items))
  	}
  }

  getWarenkorbItems =() =>{
  	let items = localStorage.getItem('warenkorb')
  	return JSON.parse(items)
  }

  getCartLength = () =>{
  	let items = this.getWarenkorbItems();
  	let len = items ? items.length: 0; 
  	return len;
  }

  getTotal = () =>{
  	let items = this.getWarenkorbItems();
  	return items?.reduce((acc, item) => acc + item.price, 0)
  }

	rabattCalculate =(v) =>{
		let totalPreis = this.getTotal()
		let discounted = totalPreis - ((v/100)*totalPreis)
		return discounted

	}


}
