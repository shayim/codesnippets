import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.sass'],
})
export class ModalWindowComponent implements OnInit {
  showing = false
  constructor() {}

  ngOnInit() {}
}
