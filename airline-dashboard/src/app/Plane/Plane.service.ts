import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Plane } from '../org.team3.airline';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PlaneService {

	
		private NAMESPACE: string = 'Plane';
	



    constructor(private dataService: DataService<Plane>) {
    };

    public getAll(): Observable<Plane[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Plane> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Plane> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Plane> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Plane> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
