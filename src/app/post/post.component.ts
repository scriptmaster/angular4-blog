import { Component, OnInit, Input } from '@angular/core';
import { BlogService, Post } from '../services/blog.service';

@Component({
    selector: 'posts',
    template: '<div><a href="#/refresh" on-click="refresh()">Refresh</a></div><post *ngFor="let p of posts" [post]="p"></post>',
    providers: [ BlogService ]
})
export class PostsComponent implements OnInit {

    posts: Post[];

    constructor(private blogService: BlogService) {
        // console.log(this, http);
    }

    ngOnInit(): void {
        console.log('PostComponent OnInit.  This is where you call the service and populate your component UI data');

        this.blogService.getPosts()
            .subscribe((posts: Post[]) => {
                console.log('posts: ', posts);
                this.posts = posts;
            })

        /*
        this.blogService.getPosts()
            .then((posts: Post[]) => {
                console.log('posts: ', posts);
                this.posts = posts;
            })
        */
    }

    refresh() {
        console.log('Refresh');

        this.blogService.get()
            .subscribe((posts: Post[]) => {
                console.log('posts: ', posts);
                this.posts = posts.map((o: Post) => { o.title += Math.round(Math.random() * 1000); return o; });
            })

    }

}


@Component({
    selector: 'post',
    template: '<h2>{{post.title}}</h2><p>{{post.body}}</p>',
    providers: [ BlogService ]
})
export class PostComponent implements OnInit {

    @Input()
    post: Post;

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }

}