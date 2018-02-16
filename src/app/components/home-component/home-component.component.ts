import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InitJsService} from '../../services/init-js.service';

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    ngOnInit() {
    }


    ngAfterViewInit() {
        InitJsService.initScroll();
        InitJsService.initBlockOne();
        InitJsService.initLoc();
    }

}
