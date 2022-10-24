export interface LoginRegisterProps {
  username: string;
  onComplete?: (token: string) => void;
  onError?: (message: string) => void;
}
