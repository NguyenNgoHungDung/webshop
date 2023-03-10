import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatProgressBarModule,
  ]
})
export class ShareModule { }
