import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./shared/sidebar/sidebar";
import { Header } from './shared/header/header';
import { Login } from "./features/login/pages/login/login";
import { Filters } from "./shared/filters/filters";
import { Stepper } from "./shared/stepper/stepper";
import { Breadcrumb } from './shared/breadcrumb/breadcrumb';
import { Tabs } from './shared/tabs/tabs';

@Component({
    selector: 'app-root',
    imports: [Sidebar, Header, Login, Filters, Stepper, Breadcrumb, Tabs],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('sakai');
}
