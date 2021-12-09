import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { CalcComponent } from './calc/calc.component';
import { MEANService } from './mean.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MEANService],
  bootstrap: [AppComponent]
})
export class AppModule { }
