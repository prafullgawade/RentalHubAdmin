import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  // { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: 'admin/dashboard' } // Wildcard route for a 404 page, if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
