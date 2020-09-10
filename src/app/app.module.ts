import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  HttpClientModule,
  // HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    //     { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    // { provide: ErrorHandler, useClass: SentryErrorHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
