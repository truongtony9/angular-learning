import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
  `You are now friends with John`, `John liked your tweet`, `John said hi` ];
  constructor() { }
}
