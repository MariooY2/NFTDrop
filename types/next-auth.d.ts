import "next-auth";

declare module "next-auth" {
  interface Session {
    address?: string;
    user?: {
      name?: string;
      // Add any additional fields you want
    };
  }
}
