export type UserModel = {
  user_id: number;
  username: string;
  email: string;
  role: UserRoles;
};

export enum UserRoles {
  CLIENT = "client",
  VENDOR = "vendor",
}
