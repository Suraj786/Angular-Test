import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShowTypeEnum, PlotTypeEnum } from '../../models/enums/movieEnum';
import { MovieSearchParams } from '../../models/movieSearchParams';
import { MovieSearchService } from '../../services/movie-search.service';

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.scss']
})
export class MovieSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  showTypes = Object.values(ShowTypeEnum);
  plotTypes = Object.values(PlotTypeEnum);

  constructor(
    private formBuilder: FormBuilder,
    private movieSearchService: MovieSearchService
  ) { }

  ngOnInit() {
    this.searchFormInit();
  }

  searchFormInit() {
    this.searchForm = this.formBuilder.group({
      Title: [null, Validators.required],
      Type: [''],
      Plot: [PlotTypeEnum.Short],
      Year: ['', Validators.pattern(/^(19|20)\d{2}$/)]
    });
  }

  submitForm() {
    console.log(this.searchForm.value)
    if (this.searchForm.invalid)
      return;

    const searchParams: MovieSearchParams = this.searchForm.value;
    this.movieSearchService.emitNextSearchParam(searchParams);
  }

  resetForm() {
    this.searchForm.reset();
    this.searchFormInit();
  }
}
