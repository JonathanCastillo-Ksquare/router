const fakeFirebase = {
    isAuthenticated: false,
    signIn(callback: VoidFunction) {
        fakeFirebase.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signOut(callback: VoidFunction) {
        fakeFirebase.isAuthenticated = false;
        setTimeout(callback, 100);

    }
}

export { fakeFirebase };