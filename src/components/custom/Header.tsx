"use client";

import { FC } from "react";
import Link from "next/link";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Image from "next/image";

const Header: FC = () => {
  const { user } = useUser();

  return (
    <div className="flex p-3 shadow-sm justify-between items-center px-5">
      <Link href="/" passHref>
        <Image src="/logo.svg" width={150} height={150} style={{ cursor: "pointer" }} alt="Logo" />
      </Link>
      <div className="flex items-center justify-between gap-2">
        <Link href="/blog">
          <Button className="rounded-lg">
            Blog
          </Button>
        </Link>
        {user ? (
          <div className="flex items-center gap-3">
            <Link href="/create-trip" passHref>
              <Button variant="outline" className="rounded-full">
                + Create Trips
              </Button>
            </Link>
            <Link href="/my-trips" passHref>
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Header;
