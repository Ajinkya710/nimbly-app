type TLoginFormData = {
  username: string;
  password: string;
};

type TUser = {
  username: string;
  email: string;
};

type TLoginResponse = {
  accessToken: string;
};

export type { TLoginFormData, TUser, TLoginResponse };
