import * as React from "react";
import { FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { links } from "@/constants/data";
import { NavUser } from "./nav-user";
import { getPersonalData } from "@/sanity/lib/action";
import { urlFor } from "@/sanity/lib/image";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const personalData = await getPersonalData();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <span className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            {personalData?.name.split(" ")[0]}
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {links.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive ?? false}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: personalData.name,
            email: personalData.email,
            avatar: urlFor(personalData.profilePhoto)
              .auto("format")
              .format("webp")
              .url(),
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
