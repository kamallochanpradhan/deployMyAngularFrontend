import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agency } from 'src/app/Model/agency.model';
import { AgencyService } from 'src/app/Services/agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agencyForm: FormGroup;
  agencies: Agency[] = [];
  isEdit = false;
  editMode: boolean = false;


  constructor(private fb: FormBuilder, private agencyService: AgencyService) {
    this.agencyForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      establishedDate: ['', Validators.required],
      isActive: [false],
      agencyType: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadAgencies();
  }

  loadAgencies(): void {
    this.agencyService.getAllAgencies().subscribe(data => this.agencies = data);
  }

  onSubmit(): void {
    if (this.agencyForm.invalid) return;

    const agency = this.agencyForm.value as Agency;

    if (this.isEdit) {
      this.agencyService.updateAgency(agency.id, agency).subscribe(() => {
        this.resetForm();
        this.loadAgencies();
      });
    } else {
      this.agencyService.addAgency(agency).subscribe(() => {
        this.resetForm();
        this.loadAgencies();
      });
    }
  }

  editAgency(agency: Agency): void {
    this.agencyForm.patchValue(agency);
    this.isEdit = true;
  }

  deleteAgency(id: number): void {
    this.agencyService.deleteAgency(id).subscribe(() => {
      this.loadAgencies();
    });
  }

  resetForm(): void {
    this.agencyForm.reset({
      id: 0,
      name: '',
      registrationNumber: '',
      establishedDate: '',
      isActive: false,
      agencyType: '',
      description: ''
    });
    this.isEdit = false;
  }
}