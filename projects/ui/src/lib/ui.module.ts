import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [UiComponent, ButtonComponent],
  imports: [
  ],
  exports: [UiComponent]
})
export class UiModule { }
