import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

interface IApiResponse {
  success: boolean;
  data: any;
}

@Injectable({
  providedIn: "root"
})
export class DataProviderService {
  API_URL: string = "http://localhost:2000/api";

  constructor(public auth: AuthService, private http: HttpClient) { }

  public getTrainer(trainerEmail): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/trainer-id/${trainerEmail}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  public getClientsList(trainerId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/clients-for-trainer/${trainerId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  public getDietsList(clientId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/diets-for-client/${clientId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  public getDietGoal(clientId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/diet-goal-for-client/${clientId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  public getMeasurementsList(clientId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/measurements-for-client/${clientId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  public getExercisesList(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.API_URL}/exercises/`, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }

  public getExercise(exerciseId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/exercise/${exerciseId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  public getWorkoutsList(clientId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${this.API_URL}/workouts-for-client/${clientId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }

  /**
   * addNewWorkout
   */
  public addNewWorkout(workout) {
    return this.http.post<IApiResponse>(
      `${this.API_URL}/create-workout`,
      workout,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    )
  }

  public getClientHistory(clientId, exerciseId): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      `${
      this.API_URL
      }/history-for-client/${clientId}/for-exercise/${exerciseId}`,
      {
        headers: new HttpHeaders().set(
          "Authorization",
          `Bearer ${this.auth.accessToken}`
        )
      }
    );
  }
}
