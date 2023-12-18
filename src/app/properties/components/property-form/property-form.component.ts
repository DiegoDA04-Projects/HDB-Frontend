import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Property} from "../../model/property";
import {FormControl, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-property-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './property-form.component.html',
  styleUrl: './property-form.component.css'
})
export class PropertyFormComponent {


  @Input() property: Property;

  @ViewChild('propertyForm', { static: false}) propertyForm!: NgForm;

  @Input() editMode = false;

  @Output() propertyAdded = new EventEmitter<Property>();

  @Output() propertyUpdated = new EventEmitter<Property>();

  @Output() editCanceled = new EventEmitter();

  tagOptions = ['Y', 'N'];
  constructor() {
    this.property = {} as Property;
  }

  private resetEditState() {
    this.editMode = false;
    this.propertyForm.resetForm();
    this.property = {} as Property;
  }

  onSubmit() {
    if (this.propertyForm.form.valid) {
      if (this.editMode) {
        this.propertyUpdated.emit(this.property);
      } else {
        this.propertyAdded.emit(this.property);
      }
      this.resetEditState();
    } else {
      console.log('Invalid data');
    }
  }

  onCancel() {
    this.resetEditState();
    this.editCanceled.emit();
  }

}
