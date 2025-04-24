import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 hidden border-b bg-white/80 px-6 py-3 backdrop-blur-md md:block md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2">
          <h2 className="text-xl font-bold tracking-tighter text-red-500">
            김밥볼
          </h2>
          <h2 className="text-xl font-bold uppercase">MC Grill</h2>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="">Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="">
                    Build Your Bowl
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="">
                    Build Your Kimbap
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="">About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="">
                    Locations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Search className="h-4 w-4" />
          <Button className="hidden bg-red-600 md:block">Order Online</Button>
        </div>
      </div>
    </header>
  );
}
