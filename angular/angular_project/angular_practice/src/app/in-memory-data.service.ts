import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api'
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const members = [
      {id: 11, name: "佐藤　春人"},
      {id: 12, name: "山田　太郎"},
      {id: 13, name: "高田　大夢"},
      {id: 14, name: "阿藤　和久"},
      {id: 15, name: "伊東　ひろし"},
      {id: 16, name: "佐原　永都"},
      {id: 17, name: "北中　佑美"},
      {id: 18, name: "吉田　江里奈"},
      {id: 19, name: "北条　豪一"},
      {id: 20, name: "佐々木　亜美"}
    ];
    return { members }
  }

  genId(members: Member[]): number{
    return members.length > 0 ? Math.max(...members.map(member => member.id))+1 : 11;
  }
  
}
