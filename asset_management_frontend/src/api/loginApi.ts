// src/api/auth.ts
import axiosApi from './axiosApi'

export interface LoginRequest {
  pin: string
  ID: string
}

export interface LoginResponse {
  ID: string
  name: string
  access_token: string
}

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const res = await axiosApi.post<LoginResponse>('/login', payload)
  return res.data
}
