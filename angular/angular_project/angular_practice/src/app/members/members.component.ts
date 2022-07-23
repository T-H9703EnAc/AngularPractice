import { Component, OnInit } from '@angular/core';
import { Member } from '../member'
import { MemberService } from "../member.service"
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members!:Member[];
  // selectedMemberだとNullを許容しない selectedMember!だとNullを許容する
  selectedMember!: Member;
  
  constructor(
    private memberService: MemberService,
    private messageService: MessageService,   
    ) {}
  
  ngOnInit(): void {
    this.getMember();
  }
  onSelect(member: Member):void{
    this.selectedMember = member;
    this.messageService.add(`MemberComponent: 社員データ(id=${member.id}が選択されました。)`)
  }
  getMember():void{
    this.memberService.getMembers()
    // of(Members)からMembersが送られてくる(非同期処理)
    .subscribe(members =>this.members = members);
  }

}
