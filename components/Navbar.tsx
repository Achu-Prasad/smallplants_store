"use client"


import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [dropdownMenu, setDropdownMenu] = useState(false);




  if (!isLoaded) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // console.log("User is not signed in");
    return (
      <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
        <Link href="/">
          <Image
            src="/smallplants_logo.png"
            alt="logo"
            width={130}
            height={100}
          />
        </Link>
        <div>
          <Link href="/sign-in">Sign In</Link>
          <Link href="/">Home</Link>
        </div>
        <Menu className="cursor-pointer" />
      </div>
    );
  }

  // console.log("User data:", user);

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image
          src="/smallplants_logo.png"
          alt="logo"
          width={130}
          height={100}
        />
      </Link>
      <Link href="/">Home</Link>

      <div className=" relative flex items-center gap-3"> 
        <Link href="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-green-800 hover:text-white">
          <ShoppingCart />
          <p className="text-base-bold">Cart (0)</p>
        </Link>
        {user && <Menu className="cursor-pointer" onClick={()=> setDropdownMenu(!dropdownMenu)}/>}

        {user && dropdownMenu && (
          <div className="absolute top-10 right-5 flex flex-col gap-2 p-3 rounded-lg border bg-green-100 text-base-bold">
            <Link href ="/wishlist" className="hover:text-green-600">Wishlist</Link>
            <Link href ="/orders" className="hover:text-green-600">Orders</Link>
          </div>
        )}
        {user ? (<UserButton afterSignOutUrl="/sign-in"/>) : (<Link href="/sign-in"><CircleUserRound/></Link>)}
      </div>
    </div>
  );
};

export default Navbar;
