import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function MobileHeader() {
  return (
    <header className="block w-full border-b bg-white/80 backdrop-blur-md md:hidden">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <NavigationMenu className="absolute top-20 left-2">
              <NavigationMenuList className="flex flex-col items-start justify-start">
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className="text-xl font-semibold">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className="text-xl font-semibold">
                      Build Your Bowl
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className="text-xl font-semibold">
                      Build Your Kimbap
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className="text-xl font-semibold">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className="text-xl font-semibold">
                      Locations
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
