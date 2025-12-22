'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, CreditCard, Users, Settings } from "lucide-react"; // Optional icons
import NavItems from "./NavItems";

export const DropDown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    // Add your actual sign-out logic here
    // Examples:
    // - NextAuth: await signOut({ callbackUrl: "/sign-in" });
    // - Firebase: await signOut(auth);
    // - Custom: fetch("/api/auth/logout", { method: "POST" });

    // For now, just redirect (replace with real logout when ready)
    router.push("/sign-in");
  };

  const user = { name: "Harshit", email: "harshit@example.com" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="">
        <button
          variant="ghost"
          className="flex items-center gap-3 rounded-full  hover:bg-gray-200 p-1 transition-colors  "
        >
          <Avatar className="h-9 w-9 ">
            <AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
            <AvatarFallback className="bg-yellow-500 text-white  text-sm font-bold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start ">
            <span className="text-base font-medium text-gray-500 ">
              {user.name}
            </span>
          </div>
        </button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>

          <div className="flex flex-col space-y-1">

            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Report</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Users className="mr-2 h-4 w-4" />
          <span>Team</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={handleSignOut}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <div className=" sm:hidden">
                <NavItems />
        </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};