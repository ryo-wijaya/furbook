export const nameValidator = (name: string) => {
  
    if (!name || name.length <= 0) {
        return 'Name required';
    }
    if (name.length < 3) {
        return 'Name must be at least 3 characters'
    }
    return '';
  };

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
    const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])/;
    
    console.log("is error", !re.test(password))

    console.log(password)
    
    if (!password || password.length <= 0) {
        return 'Password required';
    }
    if (password.length < 8 || password.length > 16) {
        return 'Must be 8 to 16 characters long'
    }
    if (!re.test(password)) {
        return 'Must contain at least one numeric digit and special character'
    }
    return '';
};

export const passwordMatchValidator = (password: string, confirmPassword: string) => {
    if (password != confirmPassword) {
        return 'Password does not match'
    }
    return '';
};
  