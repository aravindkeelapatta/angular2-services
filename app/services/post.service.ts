import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/Operator/map';


interface Post {
    _id : number,
    title: string,
    body: string
}

@Injectable()

export class  PostService{
	private posts : any[];
	private apiUrl : string;
	private postData : any;

	constructor(private _http: Http) {
		this.apiUrl = "https://jsonplaceholder.typicode.com/posts";
		// this.posts = [
  //        {
  //           title : "Hello Bangalore",
  //           body : "Bangalore is a nice city!!!"
  //        },
  //        {
  //        	title : "aravind",
  //        	body : "he is a software engineer!!!"
  //        },
  //        {
  //        	title : "whos is he",
  //        	body : "he is a prabas from bahubali movie hero!!!"

  //        },
  //        {
  //        	title: "latest updates",
  //        	body : "why do you need updates!!!"
  //        }
		// ]
	}

	getPosts() : Observable<Post[]> {
		return this._http.get(this.apiUrl).map((response) => {
			return response.json()
		});
	}
	addPost(newPost : any) {
		this.posts.push(newPost);
	}
}


