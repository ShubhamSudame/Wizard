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
          to: new FormControl('dsabdhasdyu', [Validators.email]),
          subject: new FormControl('dsadasda', [Validators.required]),
          description: new FormControl('dasdasdasd', [Validators.required]),
        }),
        new FormGroup(
          {
            notificationsAlert: new FormControl(false),
          },
        ),
        new FormGroup({
          first_name: new FormControl(null),
          last_name: new FormControl(null),
          email: new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
          cc_emails: new FormControl([]),
        })
      ])
    });
  }

}
