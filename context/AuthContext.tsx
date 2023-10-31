import React, { useState, useEffect, createContext, useContext } from 'react';
import { storeDataSecurely, retrieveDataSecurely, deleteDataSecurely } from '../config/secureStoreConfig';
import { AuthProps, User } from './types';
import { AgentPage3 } from '../src/screens/Auth/register/types';
import { LoginType } from '../src/screens/Auth/login/types';
import userAuthRepo from '../src/repository/auth-repository';
const AuthContext = createContext<AuthProps>({});

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [user, setUser] = useState<User | null>(null);
    const [initialized, setInitialized] = useState<boolean>(false);
    const authRepository = new userAuthRepo();
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
    }, [initialized]);

    const login = async (userData: LoginType) => {
        const { tokens, status } = await authRepository.login(userData);
        if (status === 200) {
            const dataToStore = {
                tokens: tokens
            }
            await storeDataSecurely('user', dataToStore);
            setUser(dataToStore);
            return { message: 'Logged in successfully' }
        } else {
            return { message: tokens.message || tokens.data.response }
        }
    }


    const register = async (userData: AgentPage3) => {
        const { userMail, tokens, status } = await authRepository.register(userData);
        if (status === 200) {
            const dataToStore = {
                tokens: tokens
            };
            await storeDataSecurely('user', dataToStore);
            setUser(dataToStore);
            console.log(userMail)
            return { message: userMail.message }
        }
        else {
            return { message: userMail.message || userMail.data.message }
        }
    }



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
