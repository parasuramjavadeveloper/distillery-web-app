import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dialogue-popup',
  templateUrl: './dialogue-popup.component.html',
  styleUrls: ['./dialogue-popup.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]

})
export class DialoguePopupComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean = true;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
