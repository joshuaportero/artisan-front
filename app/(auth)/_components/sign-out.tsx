'use client'
import { Button } from '@/components/ui/button';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import React from 'react'

const Signout = () => {
    const router = useRouter()
    return (
        <Button
            onClick={async () => {
                await signOut();
                router.push('/auth')
            }}
            className="px-2 "
        >
            Sign out
        </Button>
    );
}

export default Signout