import { HomePageModule } from './home-page/home-page.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UtilityComponentsModule } from './utility-components/utility-components.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule, UtilityComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
