import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from './components/home-component/home-component.component';
import {TrampolineParkComponent} from './components/trampoline-park/trampoline-park.component';
import {EscapeRoomComponent} from './components/escape-room/escape-room.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogPostComponent} from './components/blog-post/blog-post.component';
import {TrampolinePartiesComponent} from './components/trampoline-parties/trampoline-parties.component';


const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'trampoline-park', component: TrampolineParkComponent },
  { path: 'trampoline-parties', component: TrampolinePartiesComponent },
  { path: 'escape-room', component: EscapeRoomComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:post', component: BlogPostComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
