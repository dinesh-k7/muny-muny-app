export const loginForm: any = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Enter a Valid Email',
    },
  },
  password: {
    required: {value: true, message: 'Password is required'},
  },
};

export const signupForm: any = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Enter a Valid Email',
    },
  },
  password: {
    required: {value: true, message: 'Password is required'},
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must contain at least 8 characters, uppercase,lowercase, number and special character',
    },
  },
  firstName: {
    required: {value: true, message: 'First Name is required'},
  },
  lastName: {
    required: {value: true, message: 'Last Name is required'},
  },
  addressLineOne: {
    required: {value: true, message: 'Address line one is required'},
  },
  city: {
    required: {value: true, message: 'City is required'},
  },
  state: {
    required: {value: true, message: 'State is required'},
  },
  country: {
    required: {value: true, message: 'Country is required'},
  },
  phone: {
    required: {value: true, message: 'Phone is required'},
  },
};
