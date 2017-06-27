import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Part } from '../org.team3.airline';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PartService {

	
		private NAMESPACE: string = 'Part';
	



    constructor(private dataService: DataService<Part>) {
    };

    public getAll(): Observable<Part[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Part> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Part> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Part> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Part> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
