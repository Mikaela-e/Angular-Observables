import { Component } from '@angular/core';
import { observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  source = of(1, 2, 3);

  observer = 
  {next: (x:number) => { console.log(x); },
  error: (error: any) => { console.log("Error:" + error); },
  complete: () => { console.log("Complete"); }
  }

  ngOnInit(){
    this.source.subscribe(this.observer);
  }
}
