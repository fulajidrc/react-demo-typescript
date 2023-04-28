import { LoginModel } from "@/interfaces"
import { loginAction } from "@/store/auth/auth.action"
import { RootState } from "@/store/reducers/types"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import * as Yup from 'yup';
export default function Login() {
    const {push} = useRouter();
    const dispatch:Dispatch<any> = useDispatch()
    const authState = useSelector( (state:RootState) => state.auth )
    const {isLogin} = authState

    useEffect(() => {
        if(isLogin){
            push('/');
        }
    }, [isLogin])

    const initialValues = {
        password: 'm38rmF$',
        email: 'johnd',
    }

    const onSubmit2 = (values:LoginModel) => {
        dispatch(loginAction(values));
    }

    const LoginSchema = Yup.object().shape({
        password: Yup.string()
          .min(6, 'Please enter atleast 6 charecter')
          .required('The password is required'),
        email: Yup.string().required('The email address is Required'),
      });

    return (
      <>
        <div className='mt-1'></div>
      </>
    )
  }