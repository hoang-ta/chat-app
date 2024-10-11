'use client';

import React from 'react';
import { SignInFlow } from '../types';
import { SignInCard } from './sign-in-card';
import { SignUpCard } from './sign-up-card';

export function AuthScreen() {
  const [state, setState] =
    React.useState<SignInFlow>('signIn');

  return (
    <div className='h-full flex justify-center items-center bg-[#811ebb]'>
      <div className='md:h-auto md:w-[420px] bg-red-400'>
        {state === 'signIn' ? (
          <SignInCard setAuthState={setState} />
        ) : (
          <SignUpCard setAuthState={setState} />
        )}
      </div>
    </div>
  );
}
