export const SignupErrorHandler = (error: any) => {
  if (error && error.data) {
    const {
      data: {DuplicateUserName, PasswordTooShort},
    } = error;
    if (DuplicateUserName && DuplicateUserName.length) {
      const [errorMessage] = DuplicateUserName;
      return errorMessage;
    } else if (PasswordTooShort && PasswordTooShort.length) {
      const [errorMessage] = PasswordTooShort;
      return errorMessage;
    }
  }
  return null;
};
