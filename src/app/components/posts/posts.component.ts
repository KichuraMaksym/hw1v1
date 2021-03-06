import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allposts: any[];

  constructor(private http: HttpClient) {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe(value => this.allposts = value);
  }

  ngOnInit(): void {
  }

}
