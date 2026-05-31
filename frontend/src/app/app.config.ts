import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // ✅ REQUIRED
    provideAnimations(),
    provideToastr(),

    // ✅ CHART FIX (CRITICAL)
    provideCharts(withDefaultRegisterables()),

    // ✅ HTTP WITH INTERCEPTOR
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
