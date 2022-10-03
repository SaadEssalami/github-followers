import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fafourite',
  templateUrl: './fafourite.component.html',
  styleUrls: ['./fafourite.component.css'],
  //inputs :['isFavorite']
})
export class FafouriteComponent implements OnInit {
@Input('is-favorite')//alias'is-fa'
  isSelected : boolean = false;
  @Output('nv-change')
  click = new EventEmitter ;

  constructor() { }

  ngOnInit(): void {
  }

  myFavorite(){
    this.isSelected = !this.isSelected ;
    this.click.emit(this.isSelected);//passing arguments in output dans emit(x) x:pass A O
  }
 /* personne ={
    nom :'essalami' ,
    prenom : 'saad' ,
    tel : '063411783',
    adresse : null

  }*/

}
