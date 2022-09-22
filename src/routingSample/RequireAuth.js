


export const RequireAuth = ({ children }) => {

    console.log('Children', children);

    if (5 < 3) {
        return <span>Go To Login Page!!</span>
    }
    else {
        return children;
    }


}