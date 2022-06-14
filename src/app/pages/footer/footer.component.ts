import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public aboutUs: string | undefined;
  public googleUrl!: string;
  public facebookUrl: string | undefined;
  public youtubeUrl: string | undefined;
  public twitterUrl: string | undefined;
  public instagramUrl: string | undefined;
  public printrestUrl: string | undefined;
  public yelpUrl: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.aboutUs = "This is about Rajesh Atikela.";
    this.googleUrl = 'https://www.google.co.in/';
    this.facebookUrl = "https://www.linkedin.com/in/rajesh-atikela-bbba326/";
    this.youtubeUrl = "https://studio.youtube.com/channel/UCK7VJJP_B7igCnqYmVFwsCQ/videos";
    this.twitterUrl = "https://twitter.com/i/flow/login";
    this.instagramUrl = "https://www.instagram.com/accounts/login/";
    this.printrestUrl = "https://in.pinterest.com/login/";
    this.yelpUrl = "https://www.yelp.com/login";
  }
}
