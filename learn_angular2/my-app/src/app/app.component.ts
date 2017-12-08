import { Component } from '@angular/core';

export class Hero {
  id:number;
  name:string
}

@Component({
  selector: 'app-root',
  //emplateUrl: './app.component.html',
  template:`<h1>{{title}}</h1>
            <h2>{{hero.name}} details!</h2>
            <div><label>id:</label>{{hero.id}}</div>
            <div><label>name:</label>{{hero.name}}</div>

            <div>
              <label>name:</label>
              <input [(ngModel)]="hero.name" placeholder="name" />
            </div>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour if heroes';
  hero : Hero = {
    id:1,
    name:'YANG ZHAO1'
  }
}

