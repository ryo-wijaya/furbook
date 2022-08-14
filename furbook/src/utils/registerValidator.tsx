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
        return 'Password required';
    }
    if (password.length < 8 || password.length > 16) {
        return 'Must be 8 to 16 characters long'
    }
    if (password.search(/^(?=.\d)(?=.[a-z])(?=.*[A-Z])$/) == -1) {
        return 'Must contain at least one numeric digit and special character'
    }
    return '';
};
  