import { UserAccount } from "../../types";

export const mapDecodedTokenToUser = (decodedToken: any): UserAccount | null => {
    if (!decodedToken) {
      return null;
    }
  
    const user: UserAccount = {};
  
    Object.entries(decodedToken).forEach(([key, value]) => {
      if (key.startsWith("http://")) {
        const linkKey = key.substring(key.lastIndexOf("/") + 1);
        user[linkKey] = value;
      }
    });
    return user;
};