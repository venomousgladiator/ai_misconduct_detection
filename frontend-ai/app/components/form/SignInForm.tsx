'use client';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React from 'react'; 
import { useForm } from 'react-hook-form';
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GoogleSignInButton from '@/components/ui/GoogleSignInButton';

const FormSchema = z.object({
email: z.string().min(1, "Email is required.").email("Invalid email."),
password: z.string().min(1, "Password is required.").min(8, "Password must have 8 characters.")
})
const SignInForm = () => {
const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
});
const onSubmit=(values:z.infer<typeof FormSchema>) =>{
    console.log(values);
}
    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
            <div className='space-y-2'>
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                <Input placeholder="Enter Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                <Input  type="password" placeholder="Enter Password" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
        </div>
    <Button className='w-full mt-6' type="submit">Sign In</Button>
    </form>
    <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
    after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
or
    </div>
    <GoogleSignInButton>Sign In with Google</GoogleSignInButton>
    <p className='text-center text-sm text-gray-600 mt-2'>
If you don&apos;t have an account, please&nbsp;
<Link href="/sign-up " className="text-blue-500 hover:underline">Sign Up</Link>
    </p>
    </Form>
    )
};

export default SignInForm;