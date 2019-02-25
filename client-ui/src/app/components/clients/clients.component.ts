import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientDbService} from '../../core/client-db.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

  clientsAllSubscription: Subscription;
  clients: Clients[] = [];


  constructor(private clientDbService: ClientDbService) {
    // this.clients = new Clients[];
  }

  ngOnInit() {
    // this.clients = new Clients();
    // this.login('client', 'secret');
    // this.loadClients();
  }

  loadClients() {
    // debugger;
    // @ts-ignore
    this.clientsAllSubscription = this.clientDbService.getClientsAll('orderBy=id&page=0&size=50&sort=asc').subscribe(
      (response) => {
        // console.log('----', JSON.parse(JSON.stringify(response)));
        this.clients = response;
        // console.log(new Date().getTime(), this.clients);
      });
  }

  login(user: string, password: string) {
    // debugger;
    this.clientDbService.login(user, password);
  }

  callLogin() {
    this.clientDbService.login('none', 'none');
  }

  ngOnDestroy(): void {
    this.clients = [];
  }

  showCreateModal(event: any) {
    console.log(new Date().getTime());
  }

}

export class Clients {
  id: number;
  nit: number;
  reasonsocial: string;
}
