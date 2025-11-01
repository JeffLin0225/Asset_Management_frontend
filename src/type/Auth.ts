export interface LoginRequest {
  pin: string
  ID: string
}

export interface LoginResponse {
  ID: string
  name: string
  access_token: string
}
