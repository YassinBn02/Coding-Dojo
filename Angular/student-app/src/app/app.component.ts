import { Component } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { log } from 'console';

@Component({
  selector: 'app-root',
  imports: [StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to Student App';
  course="Full-Stack Development"
  onNotify(msg:string){
    console.log(msg);
    
  }
}
