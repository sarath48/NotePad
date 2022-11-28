import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notepad';
  notesArray: string[] = [];
  inputNotes: string = '';

  updateNotesArray() {
    if (this.inputNotes !== '') {
      this.notesArray.push(this.inputNotes);
      this.inputNotes = '';
    }
  }

  deleteInputNotes() {
    this.inputNotes = '';
  }
}
