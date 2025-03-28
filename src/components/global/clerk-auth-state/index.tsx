import React from 'react'
import { ClerkLoading, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Loader from '@/components/global/loader'
import { Button } from '@/components/ui/button'

type Props = {
}

const ClerkAuthState = (props: Props) => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <>
          </>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button className='rouded-xl text-white bg-[#252525] hover:bg-[#252525]/70'>
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={25} />}
          />
        </UserButton>
      </SignedIn>
    </>
  )
}

export default ClerkAuthState
