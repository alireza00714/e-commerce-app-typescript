export type UserContextState = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};
