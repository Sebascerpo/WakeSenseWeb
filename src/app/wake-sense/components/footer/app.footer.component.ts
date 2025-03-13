import { Component, HostBinding } from '@angular/core';
import packageInfo from './../../../../../package.json';
import { LayoutService } from '../../layout/service/app.layout.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrl: 'app.footer.component.css',
    standalone: true
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) { }

    @HostBinding('class') classes: string = 'main-footer';
    public appVersion = packageInfo.version;
}
