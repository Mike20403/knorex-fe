import axiosClient from "@/utilities/axios.ts";
import { LoginRequest, LoginResult } from '@/src/models/Auth.tsx';



async function signIn({ username, password }: LoginRequest):Promise<LoginResult> {
	return axiosClient
		.post("/api/auth/signin", {
			username,
			password,
		})
		.then((res) => res.data.payload as LoginResult)
}

export default signIn
