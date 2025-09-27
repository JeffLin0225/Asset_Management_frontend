// src/api/auth.ts
import axiosApi from './axiosApi'
import type { LoginRequest , LoginResponse } from '../type/Auth'


export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const res = await axiosApi.post<LoginResponse>('/login', payload)
  return res.data
}
