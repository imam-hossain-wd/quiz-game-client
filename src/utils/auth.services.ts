import { decodedToken } from "./jwt"
import { getFromLocalStorage, setToLocalStorage } from "./localStorage"




export const storeUserInto = ({accessToken}:{accessToken:string})=> {
    setToLocalStorage(authKey, accessToken as string)
}

export const authKey = "accessToken"


export const getUserInfo = ()=> {
    const authToken = getFromLocalStorage(authKey)
  if(authToken){
    const decodedData = decodedToken(authToken)
    return decodedData;
  }
  else {
    return " ";
  }
}


export const IsUserLoggedIn:any = ()=> {
      const authToken = getFromLocalStorage(authKey);
      return !!authToken
}

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

