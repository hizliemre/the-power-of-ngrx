import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@models';

@Injectable()
export class AuthApi {

  #http = inject(HttpClient);

  login(data: Partial<{ username: string | null, password: string | null }>) {
    return this.#http.post<User>('/api/auth/login', data);
  }

}
