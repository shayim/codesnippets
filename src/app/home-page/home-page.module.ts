import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UtilityComponentsModule } from '../utility-components/utility-components.module'
import { HomePageControllerComponent } from './home-page-controller/home-page-controller.component'
import { LanguageBarComponent } from './language-bar/language-bar.component'
import { SnippetAdderComponent } from './snippet-adder/snippet-adder.component'
import { SnippetCardComponent } from './snippet-card/snippet-card.component'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    UtilityComponentsModule,
  ],
  declarations: [
    HomePageControllerComponent,
    LanguageBarComponent,
    SnippetAdderComponent,
    SnippetCardComponent,
  ],
  exports: [HomePageControllerComponent],
})
export class HomePageModule {}
