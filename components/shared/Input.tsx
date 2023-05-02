import { InputModel } from '@/interfaces';
import { Field } from 'formik';
function Input({name="test",label="Label",placeholder="placeholder", type="text"}:InputModel) {
    return (
        <>
            <label className="block font-semibold dark:text-white"> {label} </label>
            <Field type={type} placeholder={placeholder} name={name} class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md dark:bg-slate-900 dark:border-slate-800 dark:focus:ring-gray-950" />
        </>
    )
}
  
export default Input