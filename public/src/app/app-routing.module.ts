import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "edit/:id", component: EditComponent },
  { path: "home", component: HomeComponent }, // use a colon and parameter name to include a parameter in the url
  { path: "new", component: NewComponent }, // redirect to /alpha if there is nothing in the url
  { path: "", pathMatch: "full", redirectTo: "/home" }, // the ** will catch anything that did not match any of the above routes
  { path: "**", component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
