import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  template: '<h3> hoşgeldiniz </h3>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-starter';

  sumOfNumber(a:number,b:number){
    return a + b;
  }
  btnClick(){
    alert("Butona tıklandı")
  }
}
