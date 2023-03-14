import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BescheideModule } from './bescheide/bescheide.module';
import { CoreModule } from './core/core.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    BescheideModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
