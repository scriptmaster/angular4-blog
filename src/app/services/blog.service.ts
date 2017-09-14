
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class FetchService {

    private prefix: string = 'http://api.msheriff.com/public/';

    constructor(private http: Http) { }

    get(path: string) {
        return this.http.get(this.prefix + path)
            .map(res => res.json()._embedded);
    }

    /* Doesn't work -- has issues
    getBy<T>(path: string) {
        // return this.http.get<Embedded<T>>(uri);
            // .map(res => res.json()._embedded)
    }
    */

}

export class Embedded<T> {

    _embedded: T;
    _id: string;

    embedded() {
        return this._embedded;
    }
}

@Injectable()
export class BlogService extends FetchService {

    // constructor(private http: Http) { }

    get() {
        return super.get('posts');
    }

    getPosts() {
        return super.get('posts');

        /* fetch api worked - it returns a promise than an observable
        return fetch('http://api.msheriff.com/public/posts')
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                return json._embedded;
            })
        */
    }
}

export class Post {
    title: string;
    body: string;
    author: string;
    publishedOn: Date;
}
