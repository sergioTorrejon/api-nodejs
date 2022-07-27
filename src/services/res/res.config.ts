import { ResDto } from '../../common/classes';
import {
  FALSE,
  OK,
} from '../../constants/keys/keys';

//RESPONSE SUCCESS
export async function responseSuccess( _message:string, _data:any=[] ): Promise<ResDto> {
    const res = new ResDto();
        res.success=OK,
        res.message=_message,
        res.data=_data
    return res;
}

//RESPONSE ERROR
export async function responseError( _message:string, _error:string, _data:any=[] ): Promise<ResDto> {
    const res = new ResDto();
        res.success=FALSE,
        res.error=_error,
        res.message=_message,
        res.data=_data
    return res;
}