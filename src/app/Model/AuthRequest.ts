export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  isSuccess: boolean;
  reason: string | null;
}

