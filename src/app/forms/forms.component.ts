import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  items: any[] = [
    {
      index: 0,
      label: 'Step 1'
    },
    {
      index: 1,
      label: 'Step 2'
    },
    {
      index: 2,
      label: 'Step 3'
    }
  ];
  activeIndex!: number;
  wizardForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.activeIndex = 0;
    this.wizardForm = new UntypedFormGroup({
      wizardForms: new UntypedFormArray([
        new UntypedFormGroup({
          to: new UntypedFormControl('dsabdhasdyu@gmail.com', [Validators.email]),
          subject: new UntypedFormControl('dsadasda', [Validators.required]),
          description: new UntypedFormControl('dasdasdasd', [Validators.required]),
        }),
        new UntypedFormGroup(
          {
            notificationsAlert: new UntypedFormControl(false),
          },
        ),
        new UntypedFormGroup({
          first_name: new UntypedFormControl(null),
          last_name: new UntypedFormControl(null),
          email: new UntypedFormControl('abc@gmail.com', [Validators.required, Validators.email]),
          cc_emails: new UntypedFormControl([]),
        })
      ])
    });
  }

}
