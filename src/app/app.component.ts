import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'typing-game';
  randomText:any = lorem.sentence();
  enteredText:any = '';
  isMatched:boolean = false;

ngOnInit(): void {
   this.randomText = lorem.sentence();
}
 
  onInput(value:String)
  {
     this.enteredText = value;
     this.isMatched = this.enteredText===this.randomText?true:false;
  }

  onClickReload()
  {
     window.location.reload();
  }


}
