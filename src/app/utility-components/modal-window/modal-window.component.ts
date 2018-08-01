import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.sass'],
})
export class ModalWindowComponent implements OnInit {
  @Input() headerText = 'header'
  @Input() showing = false

  @Output() showingChange = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit() {}

  close = () => {
    this.showingChange.emit(false)
  }
}
