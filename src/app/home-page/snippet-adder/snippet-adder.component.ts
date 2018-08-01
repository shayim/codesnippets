import { Component, OnInit } from '@angular/core'
import { Languages } from '../temp-languages.enum'

@Component({
  selector: 'app-snippet-adder',
  templateUrl: './snippet-adder.component.html',
  styleUrls: ['./snippet-adder.component.sass'],
})
export class SnippetAdderComponent implements OnInit {
  headerText = 'New code snippet'
  showing = false

  name: string
  desc: string
  code: string
  lang: Languages

  constructor() {}

  ngOnInit() {}

  addSnippet = () => {}

  openModal = () => {
    this.showing = !this.showing
  }
}
