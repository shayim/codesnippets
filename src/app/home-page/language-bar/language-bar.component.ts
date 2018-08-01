import { Languages } from './../temp-languages.enum'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.sass'],
})
export class LanguageBarComponent implements OnInit {
  languages: Array<Languages>
  constructor() {}

  ngOnInit() {
    this.languages = [Languages.typescript, Languages.css, Languages.cSharp]
  }

  toggle = (navbar: HTMLDivElement, navLink: HTMLLinkElement) => {
    console.log(navLink)
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block'
      navLink.style.display = 'block'
    } else {
      navbar.style.display = 'none'
      navLink.style.display = 'none'
    }
  }
}
