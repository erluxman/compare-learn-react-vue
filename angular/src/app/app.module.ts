import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// This file is for dependency injection
// It will list everything that the module needs and provides.
// In other words this file will work as the glue to the project.
// This file is more related to bonding the module(with its components) to the
// Whole component, rather than managing a single component and its sub components
@NgModule({
  declarations: [
    // declaring components and pipes here will make them
    // become able to share the components with each  others
    AppComponent
  ],
  imports: [
    // This is simply importing other exported modules

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// What the fuck is NgModule? Why the fuck is it needed?
