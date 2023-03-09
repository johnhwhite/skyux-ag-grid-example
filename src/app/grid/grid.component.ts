import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyAgGridModule, SkyAgGridService } from '@skyux/ag-grid';
import { AgGridModule } from 'ag-grid-angular';
import { columnDefinitions, data } from './data-set';
import { CustomLinkComponent } from './custom-link/custom-link.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, SkyAgGridModule, AgGridModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  public gridOptions = inject(SkyAgGridService).getGridOptions({
    gridOptions: {
      domLayout: 'normal',
      columnDefs: columnDefinitions,
      columnTypes: {
        custom_link: {
          cellRenderer: CustomLinkComponent,
        },
      },
      rowData: data,
    },
  });
}
