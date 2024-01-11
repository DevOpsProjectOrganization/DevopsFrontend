import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient } from '@angular/common/http';
import { AdsApi } from './services/adsApi.service';
import { ProductsApi } from './services/productsApi.service';

export const appConfig: ApplicationConfig = {
  providers: [{provide: AdsApi},
              {provide: ProductsApi},
               provideRouter(routes),
               provideHttpClient()]
};
