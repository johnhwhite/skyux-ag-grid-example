import {
  Component,
  Renderer2
} from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'skyux-ag-grid-row-select';

  constructor(
    themeSvc: SkyThemeService,
    renderer: Renderer2
  ) {
    const themeSettings = new SkyThemeSettings(
      SkyTheme.presets['default'],
      SkyThemeMode.presets.light
    );

    themeSvc.init(
      document.body,
      renderer,
      themeSettings
    );
  }
}
