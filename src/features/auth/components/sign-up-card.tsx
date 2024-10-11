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

interface SignUpCardProps {
  setAuthState: (state: SignInFlow) => void;
}

export function SignUpCard({
  setAuthState,
}: SignUpCardProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] =
    React.useState('');

  const handleSignInClick = () => {
    setAuthState('signIn');
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create an account using email or 3rd party
            services
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
            <Input
              type='password'
              required
              placeholder='Confirm Password'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
            <Button type='submit' className='w-full'>
              Sign Up
            </Button>
          </form>
          <Separator />
          <Button
            className='w-full relative'
            variant={'outline'}
          >
            <FcGoogle className='left-3 absolute size-5' />
            Sign up with Google
          </Button>
          <Button
            className='w-full relative'
            variant={'outline'}
          >
            <FaGithub className='left-3 absolute size-5' />
            Sign up with Github
          </Button>
          <div>
            <span className='text-muted-foreground text-sm'>
              Already have an account? {''}
              <span
                className='hover:underline hover:cursor-pointer text-blue-600'
                onClick={handleSignInClick}
              >
                Sign in
              </span>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
