import React, { useContext, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type registerResponseType = {
    "accessToken": string,
    "refreshToken": string
}

const useRegister = () => {
    const navigate = useNavigate()
    return (
        useMutation({
            mutationFn: async ({ email, password }: { email: string, password: string }) => {
                const { data } = await axios.post('https://expprisma-production.up.railway.app/api/v1/auth/register', { email, password })
                localStorage.setItem('token', data.accessToken)
                return data as registerResponseType
            },
            onSuccess: () => {
                navigate("/", { replace: true })

            }
        })
    )
}


const useLogin = () => {
    const navigate = useNavigate()
    return (
        useMutation({
            mutationFn: async ({ email, password }: { email: string, password: string }) => {
                const { data } = await axios.post('https://expprisma-production.up.railway.app/api/v1/auth/login', { email, password })
                localStorage.setItem('token', data.accessToken)
                return data as registerResponseType
            },
            onSuccess: () => {
                navigate("/", { replace: true })

            }
        })
    )
}

const defaultContextValues = {
    email: "",
    setEmail: (v: string) => { },
    isRegistering: false,
    password: "",
    setPassword: (v:string) => { },
    register: () => { },
    login: () => { },
    isLogin: false
}

const AuthContext = React.createContext(defaultContextValues)
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const { mutate ,data, isLoading:isRegistering } = useRegister()
    const { mutate: mutateLogin ,data: dataLogin, isLoading:isLogin } = useLogin()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState("")
    const register = () => {
        mutate({ email, password })
    }
    const login = () => {
        mutateLogin({ email, password })
    }
    return (
        <AuthContext.Provider value={{
            email,
            setEmail,
            isRegistering,
            password,
            setPassword,
            register,
            login,
            isLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider