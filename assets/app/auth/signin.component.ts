import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
@Component({
  selector: 'my-signup',
  template: `
    <section class="col-md-8 col-md-offset-2">
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #f="ngForm">
        <div class="form-group">
          <label for="email">Mail</label>
          <input [ngFormControl]="myForm.find('email')" type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input [ngFormControl]="myForm.find('password')" type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign In</button>
      </form>
    </section>
  `,
})
export class SigninComponent implements OnInit {
  myForm: ControlGroup;
  constructor(private _fb: FormBuilder) { }
  onSubmit() {

  }
  ngOnInit() {
    this.myForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required]
    });
  }

  private isEmail(control: Control): { [s: string]: boolean } {
    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
      return { invalidMail: true };
    }
  }
}