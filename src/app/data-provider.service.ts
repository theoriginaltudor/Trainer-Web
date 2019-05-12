import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

interface IApiResponse {
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class DataProviderService {
  API_URL: string = "http://localhost:2000/api";

  constructor(public auth: AuthService, private http: HttpClient) {}

  public securedPing(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.API_URL}/private`, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
}
