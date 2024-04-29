import { Component, ViewEncapsulation } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  dataSource: DataSource;

  collapsed = false;

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }

  contentReady = async (e: DxDataGridTypes.ContentReadyEvent): Promise<void> => {
    if (!this.collapsed) {
      this.collapsed = true;
      await e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = ({ originalValue }: Record<string, string>): Record<string, string> => ({ text: `${parseInt(originalValue)}%` });
}
