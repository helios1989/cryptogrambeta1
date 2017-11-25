import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IcoComponent } from '../../page/ico/ico.component';

const projroutes: Routes = [
  { path: 'ICOS', component: IcoComponent },
]

@NgModule({
  imports: [ RouterModule.forChild(projroutes) ],
  exports: [RouterModule]
})
export class IcoModuleRouting { }
