import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyDashboardComponent } from "../my-dashboard/my-dashboard.component";
import { MyTableComponent } from "../my-table/my-table.component";
import { DefaultSettingsComponent } from '../settings/default-settings/default-settings.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: MyDashboardComponent },
    { path: 'reports', component: MyTableComponent },
    { path: 'settings', component: DefaultSettingsComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}