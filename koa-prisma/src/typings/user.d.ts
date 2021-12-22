declare module "user" {
  export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    admin?: boolean;
  }
}
