import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// const componentsDependencties = [
//   NavbarComponent,
//   FooterComponent,
// ]

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
