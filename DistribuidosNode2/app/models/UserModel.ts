import { UserService } from "../services/UserService";

class UserModel {
  static async viewUsers() {
    return await UserService.viewUsers();
  }

  static async createUser(userData: any) {
    return await UserService.createUser(userData);
  }

  static async getUserById(id: number) {
    return await UserService.getUserById(id);
  }
  static async updateUser(userId: number, userData: any) {
    return await UserService.updateUser(userId, userData);
  }

  static async deleteUser(userId: number) {
    return await UserService.deleteUser(userId);
  }
  static async loginUser(email: string, password: string) {
    return await UserService.loginUser(email, password);
  }
}

export { UserModel };
