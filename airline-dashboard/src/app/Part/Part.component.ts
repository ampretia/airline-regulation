import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PartService } from './Part.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Part',
	templateUrl: './Part.component.html',
	styleUrls: ['./Part.component.css'],
  providers: [PartService]
})
export class PartComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      partNumber = new FormControl("", Validators.required);
  
      condition = new FormControl("", Validators.required);
  
      type = new FormControl("", Validators.required);
  
      serviceHistroy = new FormControl("", Validators.required);
  


  constructor(private servicePart:PartService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          partNumber:this.partNumber,
        
    
        
          condition:this.condition,
        
    
        
          type:this.type,
        
    
        
          serviceHistroy:this.serviceHistroy
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePart.getAll()
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
      $class: "org.team3.airline.Part",
      
        
          "partNumber":this.partNumber.value,
        
      
        
          "condition":this.condition.value,
        
      
        
          "type":this.type.value,
        
      
        
          "serviceHistroy":this.serviceHistroy.value
        
      
    };

    this.myForm.setValue({
      
        
          "partNumber":null,
        
      
        
          "condition":null,
        
      
        
          "type":null,
        
      
        
          "serviceHistroy":null
        
      
    });

    return this.servicePart.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "partNumber":null,
        
      
        
          "condition":null,
        
      
        
          "type":null,
        
      
        
          "serviceHistroy":null 
        
      
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
      $class: "org.team3.airline.Part",
      
        
          
        
    
        
          
            "condition":this.condition.value,
          
        
    
        
          
            "type":this.type.value,
          
        
    
        
          
            "serviceHistroy":this.serviceHistroy.value
          
        
    
    };

    return this.servicePart.updateAsset(form.get("partNumber").value,this.asset)
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

    return this.servicePart.deleteAsset(this.currentId)
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

    return this.servicePart.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "partNumber":null,
          
        
          
            "condition":null,
          
        
          
            "type":null,
          
        
          
            "serviceHistroy":null 
          
        
      };



      
        if(result.partNumber){
          formObject.partNumber = result.partNumber;
        }else{
          formObject.partNumber = null;
        }
      
        if(result.condition){
          formObject.condition = result.condition;
        }else{
          formObject.condition = null;
        }
      
        if(result.type){
          formObject.type = result.type;
        }else{
          formObject.type = null;
        }
      
        if(result.serviceHistroy){
          formObject.serviceHistroy = result.serviceHistroy;
        }else{
          formObject.serviceHistroy = null;
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
      
        
          "partNumber":null,
        
      
        
          "condition":null,
        
      
        
          "type":null,
        
      
        
          "serviceHistroy":null 
        
      
      });
  }

}
