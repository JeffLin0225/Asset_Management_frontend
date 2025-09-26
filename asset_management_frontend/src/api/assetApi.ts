import axiosApi from './axiosApi'
import type { Category } from '../type/Asset'

export async function saveAsset(columns:Category[]) {
    await axiosApi.post('/saveAsset' , {asset : columns})
}