import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitJsService} from './services/init-js.service';
import {NavigationEnd, Router} from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';

  isDarkFooter: boolean = false;

  constructor(private router: Router) {

  }


  ngOnInit()
  {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      this.defineIsFooterDark();
    });
  }


  ngAfterViewInit ()
  {
    InitJsService.initMenu();
    InitJsService.initLocScroll();
    InitJsService.initMobileMenu();
  }


  defineIsFooterDark()
  {
    let pagesWithDarkFooter: string[] = [
      '/escape-room',
      'trampoline-parties'
    ];

    this.isDarkFooter = pagesWithDarkFooter.indexOf(this.router.url) !== -1 || this.router.url.indexOf('/blog/') !== -1;
  }

}
