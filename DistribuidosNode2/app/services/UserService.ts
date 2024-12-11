import { DatabaseMethod } from "../../config/database/DatabaseMethod";
import axios from "axios";
class UserService {
  static async viewUsers() {
    return await DatabaseMethod.view({
      query: "SELECT * FROM users",
      params: [],
    });
  }

  static async createUser(userData: any) {
    const query = `INSERT INTO users (name, last_name, email, password, age, gender, status) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const params = [
      userData.name,
      userData.last_name,
      userData.email,
      userData.password,
      userData.age,
      userData.gender,
      userData.status,
    ];
    await this.welcomeUserWebhook({
      userName: `${userData.name} ${userData.last_name}`,
      email: userData.email,
    });

    return await DatabaseMethod.execute({ query, params });

  
  }

  static async getUserById(id: number) {
    const user = await DatabaseMethod.findOne({
      query: "SELECT * FROM users WHERE id = ?",
      params: [id],
    });

    if (!user) {
      throw new Error(`[UserService] Usuario con ID ${id} no encontrado.`);
    }

    return user;
  }

  static async updateUser(userId: number, userData: any) {
    const query = `UPDATE users 
        SET name = ?, last_name = ?, email = ?, password = ?, age = ?, gender = ?, status = ? WHERE id = ?`;
    const params = [
      userData.name,
      userData.last_name,
      userData.email,
      userData.password,
      userData.age,
      userData.gender,
      userData.status,
      userId,
    ];

    return await DatabaseMethod.execute({ query, params });
  }

  static async deleteUser(userId: number) {
    const query = `DELETE FROM users WHERE id = ?`;
    const params = [userId];

    return await DatabaseMethod.execute({ query, params });
  }

  static async welcomeUserWebhook(data: { userName: string; email: string }) {
    const url = "http://localhost:5093/api/pipedream/welcome";
    try {
      const response = await axios.post(url, data);
      console.log(
        `[UserService.welcomeUserWebhook] Webhook enviado exitosamente: ${response.status}`
      );
    } catch (error) {
      console.error(`[UserService] Error enviando webhook: ${error}`);
    }
  }

  static async loginUser(email: string, password: string) {
    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    const params = [email, password];
    const user = await DatabaseMethod.findOne({ query, params });
    if (!user) {
      throw new Error("[UserService] Usuario o contraseña incorrectos");
    }
    return user;
  }
}

export { UserService };
