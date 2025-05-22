// agency.service.ts
import { Injectable } from '@angular/core';
 // Adjust the import path as necessary
import { Observable, of } from 'rxjs';
import { Agency } from '../Model/agency.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AgencyService {
  readonly apiUrl = 'http://localhost:5176/api/Agency';

  constructor(private http: HttpClient) {}

  getAllAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl);
  }

  getAgencyById(id: number): Observable<Agency> {
    return this.http.get<Agency>(`${this.apiUrl}/${id}`);
  }

  addAgency(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(this.apiUrl, agency);
  }

  updateAgency(id: number, agency: Agency): Observable<Agency> {
    return this.http.put<Agency>(`${this.apiUrl}/${id}`, agency);
  }

  deleteAgency(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}