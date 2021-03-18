import React, {createContext, PureComponent, useContext} from 'react';

const AuthContext = createContext();

class AuthProvider extends PureComponent {
    state = {
        isLogin: false,
        token: '',
        fullname: '',
        username: '',
        email: '',
        phonenumber: '',
        password: '',
    };

    setUser(IsLogin, Token, Fullname, Username, Email, Phonenumber, Password) {
        this.setState({
            isLogin: IsLogin,
            token: Token,
            fullname: Fullname,
            username: Username,
            email: Email,
            phonenumber: Phonenumber,
            password: Password,
        });
    }    

    render() {
        const {children} = this.props;
        const {
            isLogin,
            token,
            fullname,
            username,
            email,
            phonenumber,
            password,
        } = this.state;

        const data = {
            isLogin,
            token,
            fullname,
            username,
            email,
            phonenumber,
            password,
            setUser: (isLogin, fullname, username, email, phonenumber, password) => this.setUser(isLogin, fullname, username, email, phonenumber, password),
        };
        return(
            <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
        );
    }
}

const AuthConsumer = () => useContext(AuthContext);

export {AuthContext, AuthConsumer};
export default AuthProvider;