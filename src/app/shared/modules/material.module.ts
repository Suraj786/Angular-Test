import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// const materialDependencties = [
//     MatToolbarModule,
//     MatButtonModule,
//     MatInputModule,
//     MatSelectModule,
//     MatFormFieldModule,
//     MatIconModule,
//     MatCardModule,
//     MatListModule,
//     MatProgressSpinnerModule,
//     MatProgressBarModule
// ]

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: []
})
export class MaterialModule { }
