import { Languages } from './../temp-languages.enum'
import { Component, OnInit } from '@angular/core'
import { Snippet } from '../models/snippet'

@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.sass'],
})
export class HomePageControllerComponent implements OnInit {
  snippets: Snippet[]

  constructor() {}

  ngOnInit() {
    this.snippets = [
      new Snippet(
        'snippet title 1',
        'snippet desc 1',
        'snippet code 1 ',
        Languages.typescript
      ),
      new Snippet(
        'snippet title 2',
        'snippet desc 2',
        'snippet code 2 ',
        Languages.typescript
      ),
      new Snippet(
        'snippet title 3',
        'snippet desc 3',
        'snippet code 3 ',
        Languages.typescript
      ),
      new Snippet(
        'snippet title 4',
        'snippet desc 4',
        'snippet code 4 ',
        Languages.typescript
      ),
      new Snippet(
        'snippet title 5',
        'snippet desc 5',
        'snippet code 5 ',
        Languages.typescript
      ),
      new Snippet(
        'snippet title 6',
        'snippet desc 6',
        'snippet code 6 ',
        Languages.typescript
      ),
    ]
  }
}
