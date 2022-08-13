export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) {
        return 'Email required';
    }
    if (!re.test(email)) {
        return 'Invalid email address';
    }
    return '';
  };
  
  export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0) {
        return 'Password required.';
    }
    return '';
  };
  