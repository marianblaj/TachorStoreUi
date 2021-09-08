import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  addStudentForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddProductFormComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.addStudentForm.value);
  }
}
