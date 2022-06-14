import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public aboutUs: string;
  public googleUrl!: string;
  public facebookUrl: string;
  public youtubeUrl: string;
  public twitterUrl: string;
  public instagramUrl: string;
  public printrestUrl: string;
  public yelpUrl: string;
  logoImage: string;
  router: Router;
  constructor() { }

  ngOnInit(): void {
    this.logoImage = "../src/favicon.ico";
    this.aboutUs = "This is about Rajesh Atikela.";
    this.googleUrl = 'https://www.google.co.in/';
    this.facebookUrl = "https://www.linkedin.com/in/rajesh-atikela-bbba326/";
    this.youtubeUrl = "https://studio.youtube.com/channel/UCK7VJJP_B7igCnqYmVFwsCQ/videos";
    this.twitterUrl = "https://twitter.com/i/flow/login";
    this.instagramUrl = "https://www.instagram.com/accounts/login/";
    this.printrestUrl = "https://in.pinterest.com/login/";
    this.yelpUrl = "https://www.yelp.com/login";
  }

  public logout() {

  }


}
