import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submission-request-button',
  templateUrl: './submission-request-button.component.html',
  styles: [
  ]
})
export class SubmissionRequestButtonComponent {

  @Input()
  public userName!: string;

  @Input()
  public deck!: number;

  @Output()
  public acceptClick: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public denyClick: EventEmitter<string> = new EventEmitter<string>();

  executeAccept(): void {
    this.acceptClick.emit(this.userName);
    console.log("Emitted");
  }

  executeDeny(): void{
    this.denyClick.emit(this.userName);
  }


}
