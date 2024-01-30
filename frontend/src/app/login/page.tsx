import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function LoginPage() {
  return (
    <div>
      <h1>Welcome to Jobify</h1>

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" />

      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Password" />

      <Button>Login</Button>
    </div>
  );
}

export default LoginPage;
