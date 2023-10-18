

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const AuthMethods = {
    }
    return (
        <AuthContext.Provider value={AuthMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;