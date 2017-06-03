import {Component} from '@angular/core';

import {PostService} from './post.service';

@Component({
	selector : 'posts',
	template : `
                  <div class = "container">
                    <h2>My Blog Post</h2>
                    <br>
                    <div class = "form-group" style = "width: 300px;">
                       <label>Title:</label>
                       <input type="text" class="form-control" [(ngModel)] = "title" /><br>
                       <label>Body : </label>
                       <input type = "text"  class="form-control" [(ngModel)] = "body"/><br>
                       <input type = "button" (click) = "addNewPost()" value = "Add Post" class="btn btn-primary"/>
                    </div>
                    <ul *ngFor = "let post of posts">
                      <li><b>{{post.title}}</b></li>
                      <li>{{post.body}}</li>
                    </ul>
                   </div>

	           `
})


export class PostComponent {
	 private posts : any[];
	 private title : string;
	 private body : string;
	 private newPost : any;

	constructor(private _postService: PostService) {
		this._postService.getPosts().subscribe(response => {
            this.posts =response
		 });
	}

	// addNewPost() {
	// 	this.newPost ={
	// 		title: this.title,
	// 		body: this.body
	// 	}
	// 	console.log(this.newPost)
	// 	this.postService.addPost(this.newPost)
	// }
}