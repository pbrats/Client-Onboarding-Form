import { Routes } from '@angular/router';
import { StartComponent } from './component/start/start.component';
import { Step1Component } from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';

export const routes: Routes = [
    { path: "", redirectTo: "step0", pathMatch: "full" },
    { path: "step0", component: StartComponent},
    { path: "step1", component: Step1Component},
    { path: "step2", component: Step2Component}
];
