import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    imports: [NgbDropdownModule],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {

}
