import { ThemeProvider } from "@/providers/theme-provider";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { getPersonalData, getSocialData } from "@/sanity/lib/action";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personalData = await getPersonalData();
  const socialData = await getSocialData();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header socialData={socialData} />
          {children}
          <Footer personalData={personalData} socialData={socialData} />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
