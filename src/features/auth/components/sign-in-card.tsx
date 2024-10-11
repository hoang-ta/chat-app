import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SignInFlow } from '../types';

interface SignInCardProps {
  setAuthState: (state: SignInFlow) => void;
}

export function SignInCard({
  setAuthState,
}: SignInCardProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUpClick = () => {
    setAuthState('signUp');
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Use email or 3rd party services to login
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-5'>
          <form action='' className='space-y-4'>
            <Input
              type='email'
              required
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <Input
              type='password'
              required
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </form>
          <Separator />
          <Button
            className='w-full relative'
            variant={'outline'}
          >
            <FcGoogle className='left-3 absolute size-5' />
            Sign in with Google
          </Button>
          <Button
            className='w-full relative'
            variant={'outline'}
          >
            <FaGithub className='left-3 absolute size-5' />
            Sign in with Github
          </Button>
          <div>
            <span className='text-muted-foreground text-sm'>
              Don&apos;t have account ? {''}
              <span
                className='hover:underline hover:cursor-pointer text-blue-600'
                onClick={handleSignUpClick}
              >
                Sign up
              </span>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
