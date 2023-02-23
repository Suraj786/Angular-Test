"use strict";(self.webpackChunkAngular_Test=self.webpackChunkAngular_Test||[]).push([[372],{6372:(bt,M,c)=>{c.r(M),c.d(M,{MoviesModule:()=>At});var s=c(6895),D=c(540),g=c(9299),U=c(9004),t=c(4650),d=c(529),x=c(1135),v=c(2340);let S=(()=>{class o{constructor(e){this.http=e,this.movieDetails$=new x.X(void 0)}getMovieDetailsFromApi(e){let n=(new d.LE).set("apikey",v.N.api_key).set("i",e);return this.http.get(v.N.base_url,{params:n})}emitNextMovieDetails(e){this.movieDetails$.next(e)}getMovieDetails(){return this.movieDetails$.asObservable()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=c(4859),r=c(3546),C=c(6338);function w(o,i){if(1&o&&(t.TgZ(0,"button",11),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e)}}function q(o,i){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"strong"),t._uU(2),t.qZA(),t._uU(3),t.qZA()),2&o){const e=i.$implicit;t.xp6(2),t.hij("",e.Source,": "),t.xp6(1),t.hij(" ",e.Value," ")}}function F(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"mat-card")(2,"mat-card-title-group")(3,"mat-card-title")(4,"strong"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-subtitle")(7,"strong"),t._uU(8),t.ALo(9,"titlecase"),t.qZA()()(),t.TgZ(10,"mat-card-content")(11,"div",1)(12,"div",2)(13,"img",3),t.NdJ("error",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.setDefaultPic(a))}),t.qZA(),t.TgZ(14,"div",4)(15,"strong"),t._uU(16),t.qZA()(),t.TgZ(17,"div"),t.YNc(18,w,2,1,"button",5),t.qZA()(),t.TgZ(19,"div",6)(20,"h5",7),t._uU(21),t.qZA(),t.TgZ(22,"mat-list")(23,"mat-list-item")(24,"strong"),t._uU(25,"Country: "),t.qZA(),t._uU(26),t.TgZ(27,"strong",8),t._uU(28,"Released: "),t.qZA(),t._uU(29),t.TgZ(30,"strong",8),t._uU(31,"Language: "),t.qZA(),t._uU(32),t.qZA(),t.TgZ(33,"mat-list-item")(34,"strong"),t._uU(35,"Actors: "),t.qZA(),t._uU(36),t.qZA(),t.TgZ(37,"mat-list-item")(38,"strong"),t._uU(39,"Director: "),t.qZA(),t._uU(40),t.qZA(),t.TgZ(41,"mat-list-item")(42,"strong"),t._uU(43,"Writer: "),t.qZA(),t._uU(44),t.qZA(),t.TgZ(45,"mat-list-item")(46,"strong"),t._uU(47,"Awards: "),t.qZA(),t._uU(48),t.qZA(),t.YNc(49,q,4,2,"mat-list-item",9),t.TgZ(50,"mat-list-item")(51,"strong"),t._uU(52,"DVD: "),t.qZA(),t._uU(53),t.qZA(),t.TgZ(54,"mat-list-item")(55,"strong"),t._uU(56,"BoxOffice: "),t.qZA(),t._uU(57),t.qZA(),t.TgZ(58,"mat-list-item")(59,"strong"),t._uU(60,"Production: "),t.qZA(),t._uU(61),t.qZA(),t.TgZ(62,"mat-list-item")(63,"strong"),t._uU(64,"Metascore: "),t.qZA(),t._uU(65),t.qZA(),t.TgZ(66,"mat-list-item")(67,"strong"),t._uU(68,"Website: "),t.qZA(),t._uU(69),t.qZA()()()()(),t.TgZ(70,"mat-card-actions")(71,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.navigateBack())}),t._uU(72,"Back"),t.qZA()()()()}if(2&o){const e=i.ngIf,n=t.oxw();t.xp6(5),t.Oqu(e.Title),t.xp6(3),t.HOy("",t.lcZ(9,24,e.Type)," | ",e.Year," | ",e.Rated," | ",e.Runtime,""),t.xp6(5),t.Q6J("src","N/A"!==e.Poster?e.Poster:n.setDefaultPic(),t.LSH)("alt",e.Title),t.xp6(3),t.AsE("IMDB Rating : ",e.imdbRating," | IMDB Votes : ",e.imdbVotes,""),t.xp6(2),t.Q6J("ngForOf",e.Genre.split(",")),t.xp6(3),t.hij(" ","N/A"==(null==e?null:e.Plot)?"Plot description unavailable.":e.Plot,""),t.xp6(5),t.hij(" ",e.Country," | "),t.xp6(3),t.hij(" ",e.Released," | "),t.xp6(3),t.hij(" ",e.Language," "),t.xp6(4),t.hij(" ",e.Actors," "),t.xp6(4),t.hij(" ",e.Director," "),t.xp6(4),t.hij(" ",e.Writer," "),t.xp6(4),t.hij(" ",e.Awards," "),t.xp6(1),t.Q6J("ngForOf",e.Ratings),t.xp6(4),t.hij(" ",e.DVD," "),t.xp6(4),t.hij(" ",e.BoxOffice," "),t.xp6(4),t.hij(" ",e.Production," "),t.xp6(4),t.hij(" ",e.Metascore," "),t.xp6(4),t.hij(" ",e.Website," ")}}let N=(()=>{class o{constructor(e,n,a){this.movieService=e,this.route=n,this.location=a}ngOnInit(){let e=this.route.snapshot.paramMap.get("id");this.movieDetails$=this.movieService.getMovieDetailsFromApi(e)}setDefaultPic(e){if(!e)return"assets/no-movie-icon.png";e.target.src="assets/no-movie-icon.png"}navigateBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(S),t.Y36(g.gz),t.Y36(s.Ye))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-movie-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-auto"],[3,"src","alt","error"],[1,"my-2"],["mat-stroked-button","",4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"m-b"],[1,"ms-1"],[4,"ngFor","ngForOf"],["mat-raised-button","",3,"click"],["mat-stroked-button",""]],template:function(e,n){1&e&&(t.YNc(0,F,73,26,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.movieDetails$))},dependencies:[s.sg,s.O5,T.lW,r.a8,r.C1,r.dn,r.n5,r.$j,r.hq,C.i$,C.Tg,s.Ov,s.rS]}),o})();var m=c(7155),P=c(727),A=c(8505),k=c(5698),h=(()=>{return(o=h||(h={})).Movie="movie",o.Series="series",o.Episode="episode",h;var o})(),p=(()=>{return(o=p||(p={})).Short="short",o.Full="full",p;var o})(),f=(()=>{return(o=f||(f={})).Poster="Poster",o.Title="Title",o.Type="Type",o.Year="Year",o.imdbID="imdbID",o.Detail="Detail",f;var o})();let b=(()=>{class o{constructor(e){this.http=e,this.movieSearchParams$=new x.X(void 0)}getMovies(e=1){const n=this.constructHttpParams(e);return this.http.get(v.N.base_url,{params:n})}constructHttpParams(e){const n=this.movieSearchParams$.value;let a=(new d.LE).set("s",n.Title).set("page",e.toString()).set("apikey",v.N.api_key);return n.Type&&(a=a.set("type",n.Type)),n.Year&&(a=a.set("y",n.Year)),a}emitNextSearchParam(e){this.movieSearchParams$.next(e)}getLatestSearchParams(){return this.movieSearchParams$.asObservable()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(d.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var y=c(7392),Y=c(4850),O=c(7296),J=c(1572);let I=(()=>{class o{constructor(){this.loadingText=""}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-loading-spinner"]],inputs:{loadingText:"loadingText"},decls:5,vars:1,consts:[[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"mat-body-strong"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div"),t._UZ(2,"mat-spinner"),t.qZA(),t.TgZ(3,"div",1),t._uU(4),t.qZA()()),2&e&&(t.xp6(4),t.hij(" ",n.loadingText,""))},dependencies:[J.Ou]}),o})();var _=c(4006),Z=c(9549),Q=c(4144),$=c(4385),j=c(3238);function L(o,i){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",t.lcZ(2,2,e)," ")}}function B(o,i){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",t.lcZ(2,2,e)," ")}}let H=(()=>{class o{constructor(e,n){this.formBuilder=e,this.movieSearchService=n,this.showTypes=Object.values(h),this.plotTypes=Object.values(p)}ngOnInit(){this.searchFormInit()}searchFormInit(){this.searchForm=this.formBuilder.group({Title:[null,_.kI.required],Type:[""],Plot:[p.Short],Year:["",_.kI.pattern(/^(19|20)\d{2}$/)]})}submitForm(){console.log(this.searchForm.value),this.searchForm.invalid||this.movieSearchService.emitNextSearchParam(this.searchForm.value)}resetForm(){this.searchForm.reset(),this.searchFormInit()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.qu),t.Y36(b))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-movie-search-form"]],decls:38,vars:3,consts:[["mat-card-avatar","",1,"d-flex","justify-content-center","align-items-center"],["fontIcon","search"],["target","_black","href","http://www.omdbapi.com/"],[3,"formGroup"],[1,"row"],[1,"col-xl-4"],["matInput","","placeholder","Search by title","formControlName","Title"],[1,"col-md-3","col-xl-2"],["formControlName","Type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Release year","formControlName","Year"],["formControlName","Plot"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",1,"ms-3",3,"click"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"div",0),t._UZ(3,"mat-icon",1),t.qZA(),t.TgZ(4,"mat-card-title"),t._uU(5," Search Movies "),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7," Movies API is provided by "),t.TgZ(8,"a",2),t._uU(9,"OMDb API"),t.qZA()()(),t.TgZ(10,"mat-card-content")(11,"form",3)(12,"div",4)(13,"mat-form-field",5),t._UZ(14,"input",6),t.TgZ(15,"mat-error"),t._uU(16," Title is required"),t.qZA()(),t.TgZ(17,"mat-form-field",7)(18,"mat-label"),t._uU(19,"Show type"),t.qZA(),t.TgZ(20,"mat-select",8)(21,"mat-option"),t._uU(22,"None"),t.qZA(),t.YNc(23,L,3,4,"mat-option",9),t.qZA()(),t.TgZ(24,"mat-form-field",7),t._UZ(25,"input",10),t.TgZ(26,"mat-error"),t._uU(27," Specify valid year in range 1900 - 2099"),t.qZA()(),t.TgZ(28,"mat-form-field",7)(29,"mat-label"),t._uU(30,"Plot type"),t.qZA(),t.TgZ(31,"mat-select",11),t.YNc(32,B,3,4,"mat-option",9),t.qZA()(),t.TgZ(33,"div",7)(34,"button",12),t.NdJ("click",function(){return n.submitForm()}),t._uU(35,"Search"),t.qZA(),t.TgZ(36,"button",13),t.NdJ("click",function(){return n.resetForm()}),t._uU(37,"Reset"),t.qZA()()()()()()),2&e&&(t.xp6(11),t.Q6J("formGroup",n.searchForm),t.xp6(12),t.Q6J("ngForOf",n.showTypes),t.xp6(9),t.Q6J("ngForOf",n.plotTypes))},dependencies:[s.sg,_._Y,_.Fj,_.JJ,_.JL,_.sg,_.u,T.lW,Z.TO,Z.KE,Z.hX,Q.Nt,$.gD,j.ey,y.Hw,r.a8,r.dk,r.dn,r.n5,r.$j,r.kc,s.rS]}),o})();function R(o,i){1&o&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2,"Fill in the above form to get result!"),t.qZA(),t.BQk())}function G(o,i){1&o&&t.GkF(0)}const V=function(o){return{response:o}};function K(o,i){if(1&o&&(t.ynx(0),t.YNc(1,G,1,0,"ng-container",7),t.BQk()),2&o){const e=i.ngIf;t.oxw(2);const n=t.MAs(9),a=t.MAs(11);t.xp6(1),t.Q6J("ngTemplateOutlet","True"==e.Response?n:a)("ngTemplateOutletContext",t.VKq(2,V,e))}}function z(o,i){if(1&o&&(t.ynx(0),t.YNc(1,K,2,4,"ng-container",6),t.ALo(2,"async"),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.moviesData$))}}function W(o,i){1&o&&t._UZ(0,"app-loading-spinner",8),2&o&&t.Q6J("loadingText","Loading movies...")}function E(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",16)(1,"div",17)(2,"h2"),t._uU(3,"Search results"),t.qZA(),t.TgZ(4,"div",18)(5,"button",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.resultView("grid"))}),t.TgZ(6,"mat-icon"),t._uU(7,"grid_view"),t.qZA()(),t.TgZ(8,"button",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.resultView("list"))}),t.TgZ(9,"mat-icon"),t._uU(10,"view_list"),t.qZA()(),t.TgZ(11,"button",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.resultView("table"))}),t.TgZ(12,"mat-icon"),t._uU(13,"table_view"),t.qZA()()()(),t.TgZ(14,"h5"),t._uU(15,"Total movies found: "),t.TgZ(16,"span",20),t._uU(17),t.qZA()(),t._UZ(18,"mat-divider"),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("color","grid"===e.listView?"primary":"accent"),t.xp6(3),t.Q6J("color","list"===e.listView?"primary":"accent"),t.xp6(3),t.Q6J("color","table"===e.listView?"primary":"accent"),t.xp6(6),t.Oqu(e.totalMoviesFound)}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",24)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()(),t.TgZ(8,"img",25),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw(3);return t.KtG(u.openMovieDetails(l))})("error",function(a){t.CHM(e);const l=t.oxw(3);return t.KtG(l.setDefaultPic(a))}),t.qZA()()()}if(2&o){const e=i.$implicit,n=t.oxw(3);t.xp6(4),t.Oqu(e.Title),t.xp6(2),t.lnq("",e.Year," | ",t.lcZ(7,6,e.Type)," | ",e.imdbID,""),t.xp6(2),t.Q6J("src","N/A"!==e.Poster?e.Poster:n.setDefaultPic(),t.LSH)("alt",e.Title)}}function tt(o,i){if(1&o&&(t.TgZ(0,"section",21)(1,"div",22),t.YNc(2,X,9,8,"div",23),t.ALo(3,"async"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,e.movies$))}}function et(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"div",30)(3,"img",31),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw(3);return t.KtG(u.openMovieDetails(l))})("error",function(a){t.CHM(e);const l=t.oxw(3);return t.KtG(l.setDefaultPic(a))}),t.qZA()(),t.TgZ(4,"div",32)(5,"h3"),t._uU(6),t.qZA(),t.TgZ(7,"p")(8,"strong"),t._uU(9,"Year: "),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"p")(12,"strong"),t._uU(13,"Type: "),t.qZA(),t._uU(14),t.ALo(15,"titlecase"),t.qZA(),t.TgZ(16,"p")(17,"strong"),t._uU(18,"IMDB ID: "),t.qZA(),t._uU(19),t.qZA()()()()}if(2&o){const e=i.$implicit,n=t.oxw(3);t.xp6(3),t.Q6J("src","N/A"!==e.Poster?e.Poster:n.setDefaultPic(),t.LSH)("alt",e.Title),t.xp6(3),t.Oqu(e.Title),t.xp6(4),t.Oqu(e.Year),t.xp6(4),t.Oqu(t.lcZ(15,6,e.Type)),t.xp6(5),t.Oqu(e.imdbID)}}function ot(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"section",26),t.YNc(1,et,20,8,"div",27),t.ALo(2,"async"),t.TgZ(3,"div",14),t.NdJ("scrolled",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onDownScroll())}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,3,e.movies$)),t.xp6(2),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",1e3)}}function it(o,i){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Poster "),t.qZA())}function nt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-cell")(1,"div",47)(2,"img",48),t.NdJ("error",function(a){t.CHM(e);const l=t.oxw(3);return t.KtG(l.setDefaultPic(a))}),t.qZA()()()}if(2&o){const e=i.$implicit,n=t.oxw(3);t.xp6(2),t.Q6J("src","N/A"!==e.Poster?e.Poster:n.setDefaultPic(),t.LSH)("alt",e.Title)}}function at(o,i){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Title "),t.qZA())}function ct(o,i){if(1&o&&(t.TgZ(0,"mat-cell")(1,"h4"),t._uU(2),t.qZA()()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.Title)}}function rt(o,i){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Type "),t.qZA())}function st(o,i){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.Type)," ")}}function lt(o,i){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Year "),t.qZA())}function mt(o,i){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.Year," ")}}function _t(o,i){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," IMDB ID "),t.qZA())}function pt(o,i){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.imdbID," ")}}function ut(o,i){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," View Detail "),t.qZA())}function gt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-cell")(1,"button",49),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw(3);return t.KtG(u.openMovieDetails(l))}),t._uU(2,"View"),t.qZA()()}}function dt(o,i){1&o&&t._UZ(0,"mat-header-row")}function vt(o,i){1&o&&t._UZ(0,"mat-row")}function ht(o,i){if(1&o&&(t.TgZ(0,"section",33)(1,"div",34)(2,"mat-table",35,36),t.ynx(4,37),t.YNc(5,it,2,0,"mat-header-cell",38),t.YNc(6,nt,3,2,"mat-cell",39),t.BQk(),t.ynx(7,40),t.YNc(8,at,2,0,"mat-header-cell",38),t.YNc(9,ct,3,1,"mat-cell",39),t.BQk(),t.ynx(10,41),t.YNc(11,rt,2,0,"mat-header-cell",38),t.YNc(12,st,3,3,"mat-cell",39),t.BQk(),t.ynx(13,42),t.YNc(14,lt,2,0,"mat-header-cell",38),t.YNc(15,mt,2,1,"mat-cell",39),t.BQk(),t.ynx(16,43),t.YNc(17,_t,2,0,"mat-header-cell",38),t.YNc(18,pt,2,1,"mat-cell",39),t.BQk(),t.ynx(19,44),t.YNc(20,ut,2,0,"mat-header-cell",38),t.YNc(21,gt,3,0,"mat-cell",39),t.BQk(),t.YNc(22,dt,1,0,"mat-header-row",45),t.YNc(23,vt,1,0,"mat-row",46),t.qZA()()()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("dataSource",e.dataSource),t.xp6(20),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function ft(o,i){1&o&&t.GkF(0)}function xt(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,ft,1,0,"ng-container",50),t.qZA()),2&o){t.oxw(2);const e=t.MAs(7);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}function Tt(o,i){1&o&&(t.TgZ(0,"div",51),t._uU(1," All movies are already displayed ! "),t.qZA())}function Zt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",9),t.YNc(1,E,19,4,"div",10),t.YNc(2,tt,4,3,"section",11),t.YNc(3,ot,4,5,"section",12),t.YNc(4,ht,24,3,"section",13),t.TgZ(5,"div",14),t.NdJ("scrolled",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onDownScroll())}),t.qZA(),t.YNc(6,xt,2,1,"div",6),t.YNc(7,Tt,2,0,"div",15),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.totalMoviesFound),t.xp6(1),t.Q6J("ngIf","grid"===e.listView),t.xp6(1),t.Q6J("ngIf","list"===e.listView),t.xp6(1),t.Q6J("ngIf","table"===e.listView),t.xp6(1),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",1e3),t.xp6(1),t.Q6J("ngIf",!e.allMoviesFetched),t.xp6(1),t.Q6J("ngIf",e.allMoviesFetched)}}function Mt(o,i){1&o&&t._uU(0),2&o&&t.hij(" ",i.response.Error," ")}const St=[{path:"",component:(()=>{class o{constructor(e,n,a){this.movieService=e,this.router=n,this.movieSearchService=a,this.componentSubscriptions$=new P.w0,this.shouldDisplayList=!1,this.allMoviesFetched=!1,this.currentPageNumber=1,this.listView="grid",this.displayedColumns=Object.values(f),this.dataSource=new m.by([])}ngOnInit(){const e=this.movieSearchService.getLatestSearchParams().subscribe(n=>{n&&(this.shouldDisplayList=!0,this.moviesData$=this.movieSearchService.getMovies().pipe((0,A.b)(a=>{this.movies$=new x.X(a.Search),this.totalMoviesFound=a.totalResults})))});this.componentSubscriptions$.add(e)}ngOnDestroy(){this.componentSubscriptions$.unsubscribe()}resultView(e){this.listView=e,"table"==this.listView&&(this.dataSource.data=this.movies$.value)}setDefaultPic(e){if(!e)return"assets/no-movie-icon.png";e.target.src="assets/no-movie-icon.png"}onDownScroll(){this.currentPageNumber++;let e=!1;e=this.totalMoviesFound<10||this.totalMoviesFound%10==0?this.currentPageNumber<=this.totalMoviesFound/10:this.currentPageNumber<=this.totalMoviesFound/10+1,e?this.movieSearchService.getMovies(this.currentPageNumber).pipe((0,A.b)(n=>{this.movies$.next(this.movies$.value.concat(n.Search)),this.dataSource.data=this.movies$.value}),(0,k.q)(1)).subscribe():this.allMoviesFetched=!0}openMovieDetails(e){console.log(e),this.movieService.emitNextMovieDetails(e),this.router.navigate([`movies/${e.imdbID}`])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(S),t.Y36(g.F0),t.Y36(b))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-search-movies"]],decls:12,vars:3,consts:[[1,"mt-3"],[3,"ngSwitch"],[4,"ngSwitchCase"],["loading",""],["displayList",""],["errorResponse",""],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"loadingText"],[1,""],["class","animated zoomIn",4,"ngIf"],["class","result-block grid--result-block",4,"ngIf"],["class","result-block list--result-block",4,"ngIf"],["class","result-block table--result-block",4,"ngIf"],["infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["class","p-3 text-center",4,"ngIf"],[1,"animated","zoomIn"],[1,"d-flex","justify-content-between"],[1,"list-view-buttons-section"],["mat-mini-fab","",1,"list-view-button",3,"color","click"],[2,"color","#3f51b5"],[1,"result-block","grid--result-block"],[1,"row","gy-3"],["class","col-sm-6 col-md-4 col-xl-3 col-xxl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-xl-3","col-xxl-2"],["mat-card-image","",2,"cursor","pointer",3,"src","alt","click","error"],[1,"result-block","list--result-block"],["class","list-block",4,"ngFor","ngForOf"],[1,"list-block"],[1,"row"],[1,"col-sm-6","col-md-4","col-xl-3"],[2,"cursor","pointer",3,"src","alt","click","error"],[1,"col-sm-6","col-md-8","col-xl-9"],[1,"result-block","table--result-block"],[1,"mat-elevation-z8"],[3,"dataSource"],["table",""],["matColumnDef","Poster"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Title"],["matColumnDef","Type"],["matColumnDef","Year"],["matColumnDef","imdbID"],["matColumnDef","Detail"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"p-2"],[2,"max-height","100%","width","100px",3,"src","alt","error"],["mat-raised-button","","color","primary",3,"click"],[4,"ngTemplateOutlet"],[1,"p-3","text-center"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-movie-search-form"),t.TgZ(2,"div",0),t.ynx(3,1),t.YNc(4,R,3,0,"ng-container",2),t.YNc(5,z,3,3,"ng-container",2),t.BQk(),t.YNc(6,W,1,1,"ng-template",null,3,t.W1O),t.YNc(8,Zt,8,8,"ng-template",null,4,t.W1O),t.YNc(10,Mt,1,1,"ng-template",null,5,t.W1O),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngSwitch",n.shouldDisplayList),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(1),t.Q6J("ngSwitchCase",!0))},dependencies:[s.sg,s.O5,s.tP,s.RF,s.n9,T.lW,y.Hw,r.a8,r.dk,r.n5,r.$j,r.G2,Y.d,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,O.Ry,I,H,s.Ov,s.rS],styles:[".list-view-button[_ngcontent-%COMP%] + .list-view-button[_ngcontent-%COMP%]{margin-left:15px}.result-block[_ngcontent-%COMP%]{margin-top:30px}  .grid--result-block .mat-card{height:100%;transition:all .5s ease}  .grid--result-block .mat-card:hover{transform:scale3d(1.02,1.02,1.02)}  .grid--result-block .mat-card-header-text{margin:0}.list--result-block[_ngcontent-%COMP%]{max-width:800px;margin:30px auto 0}.list--result-block[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);padding:15px;margin-bottom:15px;background:#fff;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.list--result-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}.list--result-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}"]}),o})()},{path:":id",component:N},{path:"**",component:U.r}];let Ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(St),g.Bz]}),o})(),At=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,D.m,Ct]}),o})()}}]);