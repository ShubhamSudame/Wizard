import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  wizardForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activeIndex = 0;
    this.wizardForm = new FormGroup({
      wizardForms: new FormArray([
        new FormGroup({
          type: new FormControl('dsabdhasdyu', [Validators.required]),
          priority: new FormControl(1, [Validators.required]),
          subject: new FormControl('dsadasda', [Validators.required]),
          description: new FormControl('dasdasdasd', [Validators.required]),
          status: new FormControl({ value: 2, disabled: true }),
          source: new FormControl({ value: 1, disabled: true })
        }),
        new FormGroup(
          {
          attachmentOptions: new FormControl({ value: null, disabled: false }),
          noAttachment: new FormControl(false),
          },
        ),
        new FormGroup({
          custom_fields: new FormGroup({
            cf_first_name: new FormControl(null),
            cf_last_name: new FormControl(null)
          }),
          email: new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
          cc_emails: new FormControl([]),
        })
      ])
    });
  }

}
