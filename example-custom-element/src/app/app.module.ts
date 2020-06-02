import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
//  entryComponents: [HelloWorldComponent],
  entryComponents: [AppComponent],
  providers: [],
//  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const custom = createCustomElement(AppComponent, {injector: this.injector});
    if (!window.customElements.get('app-element')) {
      window.customElements.define('app-element', custom);
    }
  }
}

/*
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
      customElements.define('app-hello-world', custom);
  }
}
*/