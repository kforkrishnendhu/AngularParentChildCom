import { Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  message:string='';
  @ViewChild(ChildComponent) child!:ChildComponent;

  receiveMessage(message:string) {
this.message=message;
    
}
sendUpdate() {
  this.child.updateMessage('Message updated by parent');
  }

}
