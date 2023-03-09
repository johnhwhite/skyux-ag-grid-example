import { Component, inject, Renderer2 } from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeService,
  SkyThemeSettings,
} from '@skyux/theme';

@Component({
  selector: 'app-root',
  template: `<app-grid></app-grid>`,
})
export class AppComponent {
  constructor() {
    inject(SkyThemeService).init(
      document.body,
      inject(Renderer2),
      new SkyThemeSettings(SkyTheme.presets.modern, SkyThemeMode.presets.light)
    );
  }
}
