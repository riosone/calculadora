import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Calculadora Cientifica';
  
  
  campo:number;
  campo1:number;
  rta:number;
 
  suma(){
  this.rta=this.campo+this.campo1;
  }

  resta(){
    this.rta=this.campo-this.campo1;
  }

  multiplicacion(){
    this.rta=this.campo*this.campo1;
   }
  
  division(){
    if(this.campo1 == 0)
    {      
    alert ("no se puede dividir por cero")
    return null;
    }
    else
    this.rta=this.campo/this.campo1;
   }

  modulo(){
  this.rta = this.campo%this.campo1;
 }
 Reiniciar()
  {
    this.campo =  null ;
    this.campo1 =  null ;
    this.rta =  null ;
  }
  
  

}


