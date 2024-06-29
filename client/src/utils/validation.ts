export const registerValidation = {
  login: /^[a-z\d_]{5,12}$/i,
  password: /^[\w@.\-,!]{8,20}$/,
  email: /^([a-z\d._]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};
