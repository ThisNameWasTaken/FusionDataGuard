import { Injectable } from '@angular/core';
import ApiConfig from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // To Send:

  // To Receive:
  constructor() {}

  isLoggedIn() {
    return true;
  }

  login(userName: string, password: string) {
    const clientId = 'fa475edd-6074-4bb9-b0b6-cc39981627e0';
    const loginString = `https://api.preprod.fusionfabric.cloud/login/v1/sandbox/oidc/authorize?client_id=${clientId}&scope=openid%20profile%20email%20User.Read%20offline_access&response_type=code&redirect_uri=http://localhost:3000/login/callback&state=4967542f-b377-4787-bf7e-91c60d49b5bc`;

    const formData = new FormData();
    // const form = {
    //   client_id: 'fa475edd-6074-4bb9-b0b6-cc39981627e0',
    //   client_secret: 'f322350d-6e10-4864-b458-0174e3ca539e',
    //   grant_type: 'refresh_token',
    //   refresh_token:
    //     'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4NmVjZTA5OS1iNTk5LTQ2YmQtYjNlMy0yMThhM2ZhZmVhMTMifQ.eyJqdGkiOiIyYWEwMWI0My03ZWQ5LTQ0NDQtOWVhYy02Y2U3MGMxMjAxY2IiLCJleHAiOjE1NzUzNjYzNTQsIm5iZiI6MCwiaWF0IjoxNTc1MzY0NTU0LCJpc3MiOiJodHRwczovL2FwaS5wcmVwcm9kLmZ1c2lvbmZhYnJpYy5jbG91ZC9sb2dpbi92MSIsImF1ZCI6Imh0dHBzOi8vYXBpLnByZXByb2QuZnVzaW9uZmFicmljLmNsb3VkL2xvZ2luL3YxIiwic3ViIjoiZmZkY3VzZXIxIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImZhNDc1ZWRkLTYwNzQtNGJiOS1iMGI2LWNjMzk5ODE2MjdlMCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImVmZGM2ZTJhLTAyNDEtNDM2ZS04MTg3LWVkOWViMjMyMWY0OSIsInNjb3BlIjoib3BlbmlkIGIyYy1hY2NvdW50LXYxLWZjNzczNjJhLWMyZWUtNGIyMy1iMjBlLTU2MjEyNDllYjdhNCJ9bOFKGAvAp3nSUYCfbPzzMjfxQUQSAQ-6qjjM87oLEyw',
    //   scope: 'openid profile email User.Read offline_access',
    // };

    const form = {
      client_id: 'fa475edd-6074-4bb9-b0b6-cc39981627e0',
      scope: 'openid profile email User.Read offline_access',
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/login/callback',
      state: '3748af1a-22d4-476f-9500-6ef7d31dc04b',
    };

    for (const field in form) {
      formData.append(field, form[field]);
    }

    // fetch('http://localhost:3000/api/user')
    //   .then(res => res.json())
    //   .then(user => console.log(user));

    // fetch(
    //   'https://api.preprod.fusionfabric.cloud/login/v1/sandbox/oidc/authorize?client_id=fa475edd-6074-4bb9-b0b6-cc39981627e0&scope=openid%20profile%20email%20User.Read%20offline_access&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%2Fcallback&state=3748af1a-22d4-476f-9500-6ef7d31dc04b',
    //   {
    //     method: 'POST',
    //     // mode: 'no-cors', // no-cors, *cors, same-origin
    //     headers: {
    //       Accept: 'application/x-www-form-urlencoded',
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': '*',
    //     },
    //     // body: formData,
    //   }
    // )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }
}
