import Button from "@/components/shared/Button"
import Input from "@/components/shared/Input"
import ValidateError from "@/components/shared/ValidateError"
import { LoginModel } from "@/interfaces"
import { loginAction } from "@/store/auth/auth.action"
import { RootState } from "@/store/reducers/types"
import { Form, Formik } from "formik"
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
    const {isLogin, submitStatus} = authState

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
        console.log('values', values)
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
        <div className="flex justify-center h-full w-full place-items-center">
            <div>
                <div className="flex flex-col md:flex-row bg-white p-2 rounded-md dark:bg-slate-800 border dark:border-slate-700 shadow min-w-[350px]">
                    <div className="flex flex-col w-full">
                        <h2 className="text-2xl font-mono font-bold w-full text-center my-4">Login</h2>
                        <div>
                            <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit2} >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Input label="Email" placeholder="Email" type="text"  name="email"/>
                                        {errors.email && touched.email ? (
                                            <ValidateError error={errors.email} />
                                        ) : null}
                                        <div className="mt-3"></div>
                                        <Input label="Password" placeholder="Password" type="password" name="password"/>
                                        {errors.password && touched.password ? (
                                            <ValidateError error={errors.password} />
                                        ) : null}
                                        <div className="mt-2">
                                            <Button text={'Login'} type="submit" onClick={() => { } } processingStatus={submitStatus}></Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
      </>
    )
  }