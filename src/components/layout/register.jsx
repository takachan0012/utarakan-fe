import React from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogContent,
    DialogFooter
} from "@components/ui/dialog";
import teddy from "@assets/teddy-bear-head-svgrepo-com.svg";
import { Link, useLocation } from "react-router-dom";


const Register = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <Dialog>
            {children}
            <DialogContent className='p-11 flex flex-col bg-[#DFFF67] gap-5 w-11/12'>
                <DialogHeader className='flex flex-row justify-between lg:justify-normal'>
                    <div className="lg:9/12">
                        <DialogTitle className='text-2xl text-left'>Eiiittssss...</DialogTitle>
                        <DialogDescription className='text-base text-left lg:text-xl font-semibold'>Bikin username dulu yuk!</DialogDescription>
                    </div>
                    <img src={teddy} alt="teddy" className='w-14' />
                </DialogHeader>
                <Input placeholder='Username...' className='border-2 border-black w-full' />
                <Button className='font-bold w-full'>Register</Button>
                {pathname !== '/login' ? <DialogFooter>
                    <DialogDescription className='text-sm'>Sudah punya akun? <Link to='/login' className='text-base decoration-solid underline hover:no-underline'>Login</Link></DialogDescription>
                </DialogFooter> : null}
            </DialogContent>
        </Dialog >
    )
}

export { Register }