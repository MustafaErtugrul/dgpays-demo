import { Navigate } from "react-router-dom";



export const RoleManager = ({ children, roleId }) => {

    //kullanıcının rollerini veya rolünü çekiyorum... 

    //aynı zamanda o sayfanın roleNumber çekiyorum
    // console.log('children', children);
    // console.log('roleId', roleId);

    if (true) {
        return children;
    }
    else {
        return <Navigate to='/' replace />
    }

}