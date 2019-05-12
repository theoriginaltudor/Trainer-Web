import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as auth0 from "auth0-js";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: "qXdL6vYlRC0LEzWwD323UvN3S8a7xnTt",
    domain: "dev-9svee43o.eu.auth0.com",
    responseType: "token id_token",
    redirectUri: "http://localhost:4200/callback",
    audience: "https://trainer-app/api",
    scope: "openid profile"
  });

  constructor(public router: Router) {
    this._idToken = "";
    this._accessToken = "";
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = "";
        this.localLogin(authResult);
        this.router.navigate(["/home"]);
      } else if (err) {
        this.router.navigate(["/home"]);
        console.log(err);
      } else {
        console.log("last test");
      }
    });
  }

  private localLogin(authResult): void {
    console.log("the auth values should be set");
    // Set the time that the Access Token will expire at
    const expiresAt = authResult.expiresIn * 1000 + Date.now();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = "";
    this._idToken = "";
    this._expiresAt = 0;

    this.auth0.logout({
      returnTo: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const newDate = Date.now();
    return this._accessToken && newDate < this._expiresAt;
  }
}
