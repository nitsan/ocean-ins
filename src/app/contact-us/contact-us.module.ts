import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    SharedModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule {
}
