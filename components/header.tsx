import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import SocialIcons from "./social-icons";
import { ModeToggle } from "./toggle-mode";
import Link from "next/link";

interface HeaderProps {
  socialData: {
    links: Array<{
      title: string;
      url: string;
    }>;
  };
}
const Header = ({ socialData }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Portfolio</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <SocialIcons socialData={socialData.links} />
        <Separator orientation="vertical" className="h-4" />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
