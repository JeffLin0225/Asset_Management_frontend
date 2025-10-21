// src/api/auth.ts
import axiosApi from './axiosApi'
import type { LoginRequest , LoginResponse } from '../type/Auth'
import { useLoadingStore } from '../store/loading_store'

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const loading = useLoadingStore()
  loading.show()
  try{
    const res = await axiosApi.post<LoginResponse>('/login', payload)
    return res.data
  }catch(e:any){
    console.log('伺服器錯誤',e)
    throw e
  }finally {
    loading.hide()
  }
  
  
}
