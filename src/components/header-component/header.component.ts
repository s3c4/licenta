import {Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  @Input('activeComponent') public activeComponent: string;
  @Output('activeComponentChange') activeComponentChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  /**
   * Emit the event when change from posts to chat and vice versa
   *
   * @param {string} activeComponent
   */
  public changeActiveComponent(activeComponent: string): void {
    // -->Set: input active component with Posts or Chat
    this.activeComponent = activeComponent;
    // -->Set: output active component with Posts or Chat and emit the event
    this.activeComponentChange.emit(this.activeComponent);
  }

}
