// agency.model.ts
export interface Agency {
  id: number;
  name: string;
  registrationNumber: string;
  establishedDate: Date;
  isActive: boolean;
  agencyType: string;
  description: string;
}
