//Below code is for stand alone component

// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

//Below code is for Angular component

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
