import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SearchMoviesComponent } from './pages/search-movies/search-movies.component';

const routes: Routes = [
  { path: '', component: SearchMoviesComponent },
  { path: ':id', component: MovieDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
