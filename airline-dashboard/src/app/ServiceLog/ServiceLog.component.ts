import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceLogService } from './ServiceLog.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ServiceLog',
	templateUrl: './ServiceLog.component.html',
	styleUrls: ['./ServiceLog.component.css'],
  providers: [ServiceLogService]
})
export class ServiceLogComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      logId = new FormControl("", Validators.required);
  
      type = new FormControl("", Validators.required);
  


  constructor(private serviceServiceLog:ServiceLogService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          logId:this.logId,
        
    
        
          type:this.type
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceServiceLog.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.team3.airline.ServiceLog",
      
        
          "logId":this.logId.value,
        
      
        
          "type":this.type.value
        
      
    };

    this.myForm.setValue({
      
        
          "logId":null,
        
      
        
          "type":null
        
      
    });

    return this.serviceServiceLog.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "logId":null,
        
      
        
          "type":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.team3.airline.ServiceLog",
      
        
          
        
    
        
          
            "type":this.type.value
          
        
    
    };

    return this.serviceServiceLog.updateAsset(form.get("logId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceServiceLog.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceServiceLog.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "logId":null,
          
        
          
            "type":null 
          
        
      };



      
        if(result.logId){
          formObject.logId = result.logId;
        }else{
          formObject.logId = null;
        }
      
        if(result.type){
          formObject.type = result.type;
        }else{
          formObject.type = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "logId":null,
        
      
        
          "type":null 
        
      
      });
  }

}
