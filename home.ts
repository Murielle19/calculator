import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private recevoir_saisi:string;
  private nbre:number[];


  constructor(public navCtrl: NavController) {

  }
   public get recevoirsaisi():string{
     return this.recevoir_saisi;
  }
  public set recevoirsaisi(new_saisi:string){
    this.recevoir_saisi=new_saisi;
  }
  public get nombre():number{
    let i:number; 
    return this.nbre[i];
  }
public set nombre(new_nbre:number){
  let i:number;
  this.nbre[i]=new_nbre;
}
 public somme(){
   let i:number, sum:number=0;
   
     sum=sum+this.nbre[i-1]+this.nbre[i+1];
     console.log(sum);
     return sum;
   
  }
  public substraction(){
    let i:number, subtract:number
      for(i=0;i<this.nbre.length;i++){
        subtract=subtract- this.nbre[i];
        console.log(subtract);
    }
  }
  public multiplication(){
    let i:number, multiply:number
      for(i=0;i<this.nbre.length;i++){
        multiply=multiply* this.nbre[i];
        console.log(multiply);
    }
  }
  public division(){
    let i:number, divide:number
      for(i=0;i<this.nbre.length;i++){
        divide=divide/ this.nbre[i];
        console.log(divide);
    }
  }
  public add (recevoir_saisi:string){
    if (this.recevoir_saisi==undefined){
      this.recevoir_saisi=recevoir_saisi;
    }
    else {
      this.recevoir_saisi=this.recevoir_saisi +""+recevoir_saisi;
      // console.log(recevoir_saisi);
    }
    return parseInt(this.recevoir_saisi);
  }
  
  public  addcaractere (recevoir_saisi:string)
  {  
    this.recevoir_saisi=this.recevoir_saisi +""+recevoir_saisi;
     // console.log(recevoir_saisi);
    return this.recevoir_saisi;
  }
  public egal(recevoir_saisi){
    let i:number;
   for(i=0;i<this.recevoir_saisi.length;i++){
/*       if (recevoir_saisi=='*'){
        this.multiplication();

      }
      else if (recevoir_saisi=='/'){
        this.division();
      }*/
      if (recevoir_saisi=='+'){
        this.somme();       }
        //else if (recevoir_saisi=='-'){
        //this.substraction();
      //}
    }
  }
  }