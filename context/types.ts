import { AgentPage3 } from "../src/screens/Auth/register/types";
import { LoginType } from "../src/screens/Auth/login/types";

interface AuthProps {
    user?: any;
    initialized?: boolean;
    login?: (userData: LoginType) => Promise<{message: string} | undefined>;
    register?: (userData: AgentPage3) => Promise<{message: string} | undefined>;
    logout?: () => void;
  }
  
  interface User {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
  
  
  export{ AuthProps, User }