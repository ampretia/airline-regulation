import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ServiceLog } from '../org.team3.airline';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ServiceLogService {

	
		private NAMESPACE: string = 'ServiceLog';
	



    constructor(private dataService: DataService<ServiceLog>) {
    };

    public getAll(): Observable<ServiceLog[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ServiceLog> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ServiceLog> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ServiceLog> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ServiceLog> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
