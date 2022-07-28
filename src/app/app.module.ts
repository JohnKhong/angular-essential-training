import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpBackend, HttpXhrBackend } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from './media-item.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { lookupListsToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    { provide: lookupListsToken, useValue: lookupLists},
    { provide: HttpXhrBackend,  useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
