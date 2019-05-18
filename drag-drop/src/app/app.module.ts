import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DropdownModule, TableModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
