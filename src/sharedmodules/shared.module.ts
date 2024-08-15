import { NgModule } from '@angular/core';
import { DivComponent } from '../components/div/div.component';

@NgModule({
  declarations: [DivComponent],
  exports: [DivComponent],
})
export class SharedModule {}
