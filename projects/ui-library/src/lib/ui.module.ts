import { NgModule } from '@angular/core';
import { UiComponent } from './smoke-test/ui.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    UiComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent,
    ButtonComponent
  ]
})
export class UiModule { }
