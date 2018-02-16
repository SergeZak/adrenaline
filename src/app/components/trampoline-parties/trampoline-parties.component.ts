import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitJsService} from '../../services/init-js.service';

@Component({
  selector: 'app-trampoline-parties',
  templateUrl: './trampoline-parties.component.html',
  styleUrls: ['./trampoline-parties.component.css']
})
export class TrampolinePartiesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit()
  {
    InitJsService.initBlockOne();
    InitJsService.initLoc();
    InitJsService.initRules();
  }

}
