import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center text-muted-foreground">
      {children}
    </div>
  );
};

export default AuthLayout;
