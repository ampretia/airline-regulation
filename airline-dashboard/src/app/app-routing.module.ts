import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { AssetComponent } from './Asset/Asset.component';
import { PlaneComponent } from './Plane/Plane.component';
import { PartComponent } from './Part/Part.component';
import { ServiceLogComponent } from './ServiceLog/ServiceLog.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Asset', component: AssetComponent},
		
		{ path: 'Plane', component: PlaneComponent},
		
		{ path: 'Part', component: PartComponent},
		
		{ path: 'ServiceLog', component: ServiceLogComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
