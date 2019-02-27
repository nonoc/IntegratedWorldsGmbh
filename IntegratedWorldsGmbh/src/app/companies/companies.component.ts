import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, AbstractControl, ValidatorFn, FormArray, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { Companies } from './companies';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
    companiesForm: FormGroup;
    companies = new Companies();
 
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.companiesForm = this.fb.group({
            Id: ['', [Validators.required, Validators.minLength(3)]],
            CompanyName: ['', [Validators.required, Validators.maxLength(10)]],
            Address: ['', [Validators.required, Validators.maxLength(50)]],
            ZipCode: ['', [Validators.required, Validators.maxLength(5)]],
            City: ['', [Validators.required, Validators.maxLength(10)]]
        });      
    }

    save() {

        console.log(this.companiesForm);
        console.log('Saved: ' + JSON.stringify(this.companiesForm.value));
    }
   
}