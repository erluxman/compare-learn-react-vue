import { Component } from '@angular/core';
// Every Angular application has at least one component,
// the root component that connects a component hierarchy with the page DOM.
// Each component defines a class that contains application data and logic,
// and is associated with an HTML template that defines
// a view to be displayed in a target environment.
@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
