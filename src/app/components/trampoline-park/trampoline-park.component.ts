import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitJsService} from '../../services/init-js.service';

@Component({
  selector: 'app-trampoline-park',
  templateUrl: './trampoline-park.component.html',
  styleUrls: ['./trampoline-park.component.css']
})
export class TrampolineParkComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit()
  {

  }

  ngAfterViewInit()
  {
    InitJsService.initBlockOne();
    InitJsService.initLoc();
    InitJsService.initRules();
  }

}
