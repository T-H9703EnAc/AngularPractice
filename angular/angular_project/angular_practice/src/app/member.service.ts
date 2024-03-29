import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MessageService } from './message.service';
import { MEMBERS } from './mock.members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }
  getMembers(): Observable<Member[]> {
    this.messageService.add('MessageService:社員一覧データを取得しました。');
    // 渡した引数をObservableに変換する
    return this.http.get<Member[]>(this.membersUrl);
  }

  getMember(id: number):Observable<Member>{
    this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました。`);
    return of(MEMBERS.find(member => member.id === id))
  }

  private log(message: string){
    this.messageService.add(`MemberService: ${message}`);
  }
}
