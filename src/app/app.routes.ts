import { Routes } from '@angular/router';
import { StartComponent } from './component/start/start.component';
import { Step1Component } from './component/step1/step1.component';

export const routes: Routes = [
    { path: "", redirectTo: "step0", pathMatch: "full" },
    { path: "step0", component: StartComponent},
    { path: "step1", component: Step1Component}
];
