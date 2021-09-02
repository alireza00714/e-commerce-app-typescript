export type UserContextState = {
  isAuthenticated: boolean;
  username: string;
  login: () => void;
  logout: () => void;
};
