import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitJsService} from '../../services/init-js.service';

@Component({
  selector: 'app-escape-room',
  templateUrl: './escape-room.component.html',
  styleUrls: ['./escape-room.component.css']
})
export class EscapeRoomComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }


  ngAfterViewInit()
  {
    InitJsService.initCarousel();
    InitJsService.initLoc();
    InitJsService.initRules();
  }

}
