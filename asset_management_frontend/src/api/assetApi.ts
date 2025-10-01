import axiosApi from './axiosApi'
import type { AssetRequest, AssetResponse ,Category} from '../type/Asset'


export async function getAsset(userId :string) : Promise<Category[] | null>{
    try{
        const res = await axiosApi.get('/getAsset' , {params:{userId}})
        if ( res.status == 200 ){
            return res.data
        }else {
            console.log('查不到使用者資料')
            return null
        }
    }catch (e){
        console.log('查詢資料發生錯誤',e)
        return null
    }
}

export async function saveAsset(payload :AssetRequest) :Promise<AssetResponse>{
    try{
        const res = await axiosApi.post('/saveAsset' , payload)
        if ( res.status == 200 ){
            return {result: true ,errorMessage : ''}
        }else {
            return {result: false ,errorMessage : res.data.errorMessage }
        }
    }catch{
        return {result: false ,errorMessage : '伺服器錯誤' }
    }
}