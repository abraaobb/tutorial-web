import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './components/book/book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";
import {TutorialService} from "./services/tutorial.service";
import { BookUpdateComponent } from './components/book/book-update/book-update.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookUpdateComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    HttpClientModule,
    TutorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
