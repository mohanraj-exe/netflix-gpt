export const validate = (...inputs) => {
  // console.log(inputs);
  // return;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const fullNameRegex = /^[\p{L}' -]+$/u;

  // If it is a 'Login' form
  if (inputs[0] == true) {
    if (!emailRegex.test(inputs[1])) return "Email Id not valid";
    if (!passwordRegex.test(inputs[2])) return "Password not valid";
  }

  // If it is a 'Create account' form
  if (inputs[0] == false) {
    if (!emailRegex.test(inputs[1])) return "Email Id not valid";
    if (!passwordRegex.test(inputs[2])) return "Password not valid";
    if (!passwordRegex.test(inputs[3])) return "Confirm Password not valid";
    if (inputs[2] !== inputs[3]) return "Password not matches";
    if (!fullNameRegex.test(inputs[4])) return "Full name not valid";
  }

  return null;
};
