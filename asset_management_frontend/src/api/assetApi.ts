    import axiosApi from './axiosApi'
    import type { AssetRequest, AssetResponse} from '../type/Asset'

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