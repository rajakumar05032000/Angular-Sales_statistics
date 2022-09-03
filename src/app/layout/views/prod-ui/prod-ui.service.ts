import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { network } from '../../layout.services';

@Injectable({
  providedIn: 'root'
})
export class ProdUiService {

  /**
   * * Network.ip is assigned in environment.ts file
   */
  constructor(private http: Http) { }
  /**
  * * Service Function to get the logs/grid data from DB
  */
  prodGridData() {
    return this.http.get(`${network.ip}:${network.port}/prod/getLogsData`)
      .pipe(map(res => res.json())
      );
  }

  /**
  * * Service Function to get the lampType data from DB
  */
  prodTypeData() {
    return this.http.get(`${network.ip}:${network.port}/prod/getTypeData`)
      .pipe(map(res => res.json())
      );
  }

  userData() {
    return this.http.get(`${network.ip}:${network.port}/prod/getUserData`)
      .pipe(map(res => res.json())
      );
  }

  saveUserForProductionSession(data){
    const headers = new Headers();
    return this.http.post(`${network.ip}:${network.port}/prod/saveUserForProductionSession`, data)
    .pipe(map(res => res.json())
    );
  }

  saveLampTypeSession(data){
    const headers = new Headers();
    return this.http.post(`${network.ip}:${network.port}/prod/saveLampTypeSession`, data)
    .pipe(map(res => res.json())
    );
  }

  saveProductionDataSession(data){
    const headers = new Headers();
    return this.http.post(`${network.ip}:${network.port}/prod/saveProductionDataSession`, data)
    .pipe(map(res => res.json())
    );
  }

  saveUserData(data){
    const headers = new Headers();
    return this.http.post(`${network.ip}:${network.port}/prod/saveUserData`, data)
    .pipe(map(res => res.json())
    );
  }
}
