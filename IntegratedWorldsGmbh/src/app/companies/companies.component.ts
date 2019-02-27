import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Companies } from './companies';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
    companies = new Companies();

    constructor() {}

    ngOnInit() {
    }

    save(companiesForm: NgForm) {
        console.log(companiesForm.form);
        console.log('Saved: ' + JSON.stringify(companiesForm.value));
    }
}