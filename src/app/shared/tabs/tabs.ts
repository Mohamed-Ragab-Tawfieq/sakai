import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs',
    imports: [],
    templateUrl: './tabs.html',
    styleUrl: './tabs.scss'
})
export class Tabs {
    step: number = 1

    handleStep(step: number): void {
        this.step = step
    }
}
