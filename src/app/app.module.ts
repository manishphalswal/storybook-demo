import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ButtonComponent from './button/button.component';
import HeaderComponent from './header/header.component';
import ImageComponent from './image/image.component';
import TextfieldComponent from './textfield/textfield.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ButtonComponent,
    HeaderComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
