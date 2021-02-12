import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SpaHeaderComponent, SpaContentComponent, SpaFooterComponent, SpaBodyComponent],
  imports: [
      CommonModule,
      RouterModule
  ],
  exports: [SpaBodyComponent, SpaContentComponent, SpaFooterComponent, SpaHeaderComponent]
})
export class SpaModule { }
