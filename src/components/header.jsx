import React from 'react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Header = () => {
    return (
        <div className="   fixed top-0 w-full backdrop-blur-mb bg-white/85 h-20 z-50  border-b px-10 ">
            <nav className='container   w-full px-4 py-4 mx-auto   flex items-center justify-between sm:px-40  md:px-0 lg:px-1 xl:px-30'>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Company Logo"
                        height={60}
                        width={200}
                        className=" h-12 w-auto object-contain      "
                    />
                </Link>

                <div className='flex items-center  space-x-4 '>
                    <SignedIn>
                        <Link href="/dashboard"
                            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out flex items-center ">
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className='hidden md:inline'>Dashboard</span>
                            </Button>
                        </Link>
                        <Link href="/dashboard"
                            className="text-gray-600  hover:text-gray-900 transition duration-300 ease-in-out flex items-center ">
                            <Button variant="outline " className="bg-black text-white">
                                <PenBox size={18} />
                                <span className='hidden md:inline '>Add transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl='/dashboard'>
                            {/* <Button variant="outline" className="px-6">Login</Button> */}
                            <InteractiveHoverButton className=" rounded-md ">Login</InteractiveHoverButton>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10",
                            },
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </div>

    )
}

export default Header