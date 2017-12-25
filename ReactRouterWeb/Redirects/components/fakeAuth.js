import { setTimeout } from "timers";

const fakeAuth = {
    isAuthenticated: false,
    authenticate = (cb) => {
        this.isAuthenticated = true;
        setTimeout(cb, 100);    // fake async
    },
    signout = (cd) => {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}