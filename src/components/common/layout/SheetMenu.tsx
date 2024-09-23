import { MdMenu as MenuIcon } from "react-icons/md";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Menu } from "./Menu";
import Logo from "../../../assets/images/logo.png";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link to="/dash/home" className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-25 h-15" />
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
