import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-sample4',
  templateUrl: './sample4.component.html',
  styleUrls: ['./sample4.component.css']
})
export class Sample4Component implements OnInit {

  profileForm = this.fb.group({
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
