import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyDashboardComponent } from "../my-dashboard/my-dashboard.component";
import { MyTableComponent } from "../my-table/my-table.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'dashboard', component: MyDashboardComponent },
    { path: 'reports', component: MyTableComponent },
    { path: 'upload', redirectTo: '/upload' }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}