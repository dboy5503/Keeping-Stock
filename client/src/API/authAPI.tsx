import type { UserLogin} from '../interface/UserLogin.js';

const login = async (userInfo: UserLogin) => {
 console.log('Hello',userInfo);
    try{
    // send a post request with user login info in JSON format to the server
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(userInfo),
    });
    
    //check if the response is ok
    console.log('auth api ');
    
    
    
   

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }
    const data = await response.json(); // get the JSON response from the server
    return data;
  } catch (err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

export { login };

