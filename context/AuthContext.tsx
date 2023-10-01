import React, { useState, useEffect, createContext, useContext } from 'react';
import { storeDataSecurely, retrieveDataSecurely, deleteDataSecurely } from '../config/secureStoreConfig';
import { AuthProps, User } from './types';

const AuthContext = createContext<AuthProps>({});

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [user, setUser] = useState<User | null>(null);
    const [initialized, setInitialized] = useState<boolean>(false);
    useEffect(() => {
        (async () => {
            await retrieveDataSecurely('user')
                .then((user) => {
                    if (user != null) setUser(JSON.parse(user));
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setInitialized(true);
                })
        })()
    }, []);

    const login = (userData: User) => {
        storeDataSecurely('user', userData);
        setUser(userData);
    };

    const register = (userData: User) => {
        storeDataSecurely('user', userData);
        setUser(userData);
    };

    const logout = () => {
        deleteDataSecurely('user');
        setUser(null);
        setInitialized(false)
    };

    const value = {
        user,
        login,
        register,
        logout,
        initialized
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export {
    AuthContext,
    useAuth,
    AuthProvider
}
