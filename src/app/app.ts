import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./shared/sidebar/sidebar";
import { Header } from './shared/header/header';
import { Login } from "./features/login/pages/login/login";
import { Filters } from "./shared/filters/filters";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Sidebar, Header, Login, Filters],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('sakai');
}
