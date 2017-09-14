import { NgModule }      from '@angular/core';
// import { BlogService } from './services/blog.service';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PostsComponent, PostComponent } from './post/post.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, PostsComponent, PostComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
