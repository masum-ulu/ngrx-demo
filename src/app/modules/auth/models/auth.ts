export interface User {
    id: number;
    username: string;
    email: string;
    isadmin: boolean;
  }
  
  export var UserModel: User = {
    id: null,
    username: null,
    email: null,
    isadmin: false,
  };