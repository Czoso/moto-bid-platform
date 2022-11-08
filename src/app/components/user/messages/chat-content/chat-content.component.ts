import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit {
  public modelForm!: UntypedFormGroup;
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
  }
  public sendMessage(): void {}

  private createForm(): void {
    this.modelForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
  }
}
