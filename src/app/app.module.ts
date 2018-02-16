import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import {InitJsService} from './services/init-js.service';
import { TrampolineParkComponent } from './components/trampoline-park/trampoline-park.component';
import { EscapeRoomComponent } from './components/escape-room/escape-room.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { TrampolinePartiesComponent } from './components/trampoline-parties/trampoline-parties.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    TrampolineParkComponent,
    EscapeRoomComponent,
    BlogComponent,
    BlogPostComponent,
    TrampolinePartiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    InitJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
