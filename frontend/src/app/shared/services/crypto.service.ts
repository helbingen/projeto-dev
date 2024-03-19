import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private readonly key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

  constructor() { }

  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.key).toString();
  }

  decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
