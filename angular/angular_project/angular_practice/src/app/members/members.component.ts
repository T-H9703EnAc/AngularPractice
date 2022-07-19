import { Component, OnInit } from '@angular/core';
import { Member } from '../member'
import { MEMBERS } from "../mock.members"

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members = MEMBERS;
  member: Member =  {
    id:1,
    name: '田中太郎'
  };
  // selectedMemberだとNullを許容しない selectedMember!だとNullを許容する
  selectedMember!: Member;
  constructor() {}
  onSelect(member: Member):void{
    this.selectedMember = member;
  }

  ngOnInit(): void {
  }

}
