import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientsComponent } from './components/clients/clients.component';
import {ClientDbService} from './core/client-db.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CreateFormModalComponent} from './components/create-form-modal/create-form-modal.component';
import {CreateClientComponent} from './components/create-client/create-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CreateFormModalComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientDbService],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateFormModalComponent,
    CreateClientComponent
  ]
})
export class AppModule { }
