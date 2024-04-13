import { Routes } from '@angular/router';
import { StartComponent } from './component/start/start.component';
import { Step1Component } from './component/step1/step1.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { EndComponent } from './component/end/end.component';

export const routes: Routes = [
    { path: "", redirectTo: "step0", pathMatch: "full" },
    { path: "step0", component: StartComponent},
    { path: "step1", component: Step1Component},
    { path: "step2", component: Step2Component},
    { path: "step3", component: Step3Component},
    { path: "end", component: EndComponent}
];
