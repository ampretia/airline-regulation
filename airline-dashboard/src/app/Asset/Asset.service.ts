import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Asset } from '../org.hyperledger.composer.system';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AssetService {

	
		private NAMESPACE: string = 'Asset';
	



    constructor(private dataService: DataService<Asset>) {
    };

    public getAll(): Observable<Asset[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Asset> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Asset> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Asset> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Asset> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
