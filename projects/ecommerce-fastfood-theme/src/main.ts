import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs'; // for carousel touch usage

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(async () => {
  try {
    await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    console.error(err);
  }
})();
