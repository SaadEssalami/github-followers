import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../services/github-service.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[] = [];

  constructor(private service : GithubServiceService) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(followers => this.followers = followers);
  }

}
