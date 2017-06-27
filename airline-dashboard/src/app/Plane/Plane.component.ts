import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PlaneService } from './Plane.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Plane',
	templateUrl: './Plane.component.html',
	styleUrls: ['./Plane.component.css'],
  providers: [PlaneService]
})
export class PlaneComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      nNumber = new FormControl("", Validators.required);
  
      parts = new FormControl("", Validators.required);
  


  constructor(private servicePlane:PlaneService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          nNumber:this.nNumber,
        
    
        
          parts:this.parts
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePlane.getAll()
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
      $class: "org.team3.airline.Plane",
      
        
          "nNumber":this.nNumber.value,
        
      
        
          "parts":this.parts.value
        
      
    };

    this.myForm.setValue({
      
        
          "nNumber":null,
        
      
        
          "parts":null
        
      
    });

    return this.servicePlane.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "nNumber":null,
        
      
        
          "parts":null 
        
      
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
      $class: "org.team3.airline.Plane",
      
        
          
        
    
        
          
            "parts":this.parts.value
          
        
    
    };

    return this.servicePlane.updateAsset(form.get("nNumber").value,this.asset)
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

    return this.servicePlane.deleteAsset(this.currentId)
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

    return this.servicePlane.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "nNumber":null,
          
        
          
            "parts":null 
          
        
      };



      
        if(result.nNumber){
          formObject.nNumber = result.nNumber;
        }else{
          formObject.nNumber = null;
        }
      
        if(result.parts){
          formObject.parts = result.parts;
        }else{
          formObject.parts = null;
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
      
        
          "nNumber":null,
        
      
        
          "parts":null 
        
      
      });
  }

}
