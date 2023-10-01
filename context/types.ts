interface AuthProps {
    user?: any;
    initialized?: boolean;
    login?: (userData: User) => void;
    register?: (userData: User) => void;
    logout?: () => void;
  }
  
  interface User {
  name: string;
  id: string
  }
  
  export{ AuthProps, User }