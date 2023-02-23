import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { MaterialModule } from "./modules/material.module";

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

// const sharedDependencties = [
//   RouterModule,
//   FormsModule,
//   ReactiveFormsModule,
//   MaterialModule,
//   HttpClientModule
// ]

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers:[],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    InfiniteScrollModule,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
