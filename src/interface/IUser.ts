interface IUser {
  id: string;
  guarantor: {
    address: string;
    firstName: string;
    gender: string;
    phoneNumber: string
    lastName: string;
  };
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: {
    duration: string;
    employmentStatus: string;
    level: string;
    loanRepayment: string;
    monthlyIncome: [string, string];
    officeEmail: string;
    sector: string;
  };
  email: string;
  lastActiveDate: string;
  phoneNumber: string;
  profile: {
    address: string;
    avatar: string;
    bvn: string;
    currency: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  orgName: string;
  userName: string;
}

export default IUser;
