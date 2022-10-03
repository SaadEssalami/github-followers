import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  id : number | undefined ;
  username : string |  undefined ;
  page : number | undefined ;
  type : string |  undefined ;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    //ce code pour recuperer les segmants dynamique 
    /*this.route.paramMap.subscribe( params => {
      this.id = JSON.parse(params.get('id') || '{}')
      this.username = params.get('username') || "";
    })*/
    // OR 
    this.id = JSON.parse(this.route.snapshot.paramMap.get('id') || '{}');
    this.username = this.route.snapshot.paramMap.get('username') || "";

    //ce code pour recuperer les queries
    /*this.route.queryParamMap.subscribe(queryparams => {
      console.log(queryparams.get('type'));
    })*/
    //Or 
    this.page = JSON.parse(this.route.snapshot.queryParamMap.get('page') || '{}');
    this.type = this.route.snapshot.queryParamMap.get('type') || "";
  }

}
