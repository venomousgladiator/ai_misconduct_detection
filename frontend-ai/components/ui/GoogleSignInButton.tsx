import React, { Children, FC, ReactNode } from 'react';
import { Button } from './button';
interface GoogleSignInButton {
    children:ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButton> = ({children}) =>
{
    const loginWithGoogle = () => console.log("Login with Google")
    return(
        <Button onClick={loginWithGoogle}className='w-full'>
            {children}
        </Button>
    )
}
export default GoogleSignInButton;