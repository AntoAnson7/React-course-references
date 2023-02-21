import "./form.css"
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const Form=()=>{

    const schema=yup.object().shape({
        fullname:yup.string().required(),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(18).required(),
        pwd:yup.string().min(5).max(20).required(),
        confpwd:yup.string().oneOf([yup.ref("pwd"),null],"Password don't match")
    })

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit=(data)=>{
        console.log(data)
    }

    return (
        <>
        <form className="form" onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" placeholder="Full Name"{...register("fullname")}/>
            {errors.fullname?<p className="err">{errors.fullname.message}</p>:""}
            <input type="text" placeholder="Email"{...register("email")}/>
            {errors.email?<p className="err">{errors.email.message}</p>:""}
            <input type="number" placeholder="Age"{...register("age")}/>
            {errors.age?<p className="err">{errors.age.message}</p>:""}
            <input type="password" placeholder="Password"{...register("pwd")}/>
            {errors.pwd?<p className="err">{errors.pwd.message}</p>:""}
            <input type="password" placeholder="Confirm Password"{...register("confpwd")}/>
            {errors.confpwd?<p className="err">{errors.confpwd.message}</p>:""}
            <input className="button" type="submit"/>
        </form>
        </>
    )
}