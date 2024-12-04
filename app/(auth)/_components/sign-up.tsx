'use client'

import { withAuthenticator } from "@aws-amplify/ui-react"
import { AuthUser } from "aws-amplify/auth"
import '@aws-amplify/ui-react/styles.css'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Signup = ({ user }: { user?: AuthUser }) => {
    const router = useRouter()
    useEffect(() => {
        if (user) {
            router.push("/")
        }
    })
    return null
}
export default withAuthenticator(Signup)