import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAuthModule } from './loginAuth/loginAuth.module';
import { ComponentProcModule } from './componentProc/componentProc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginAuthModule,
    ComponentProcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
