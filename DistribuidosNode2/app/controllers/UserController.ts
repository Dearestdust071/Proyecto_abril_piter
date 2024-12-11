import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

class UserController {
  static async viewUsers(req: Request, res: Response) {
    console.log("[UserController] viewUsers llamado");
    const result = await UserModel.viewUsers();
    res.json(result);
  }

  static async createUser(req: Request, res: Response) {
    try {
      console.log("[UserController] createUser llamado");
      const userData = req.body;
      const result = await UserModel.createUser(userData);
      res.json({
        message: "[UserController] Usuario creado con éxito",
        result,
      });
    } catch (error) {
      console.error("[UserController] Error al crear usuario:", error);
      res.status(500).json({
        message: `[UserController] Error al crear usuario, ${
          error instanceof Error ? error.message : JSON.stringify(error)
        }`,
      });
    }
  }

  static async getUser(req: Request, res: Response) {
    try {
      console.log("[UserController] getUser llamado");
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) {
        console.error("[UserController] ID no válido:", userId);
        return res.status(400).json({ error: "ID de usuario no válido." });
      }

      const user = await UserModel.getUserById(userId);

      return res.status(200).json(user);
    } catch (error) {
      console.error("[UserController] Error obteniendo usuario:", error);
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);
      const userData = req.body;

      if (isNaN(userId)) {
        return res.status(400).json({
          error: true,
          msg: "[UserController.updateUser] ID usuario invalido",
        });
      }

      const updateUser = await UserModel.updateUser(userId, userData);

      return res.status(200).json({
        error: "False",
        message: "[UserController.updateUser] Usuario actualizado con exito.",
      });
    } catch (error) {
      return res.status(400).json({
        error: "True",
        message: "[UserController.updateUser] No se actualizo apropiadamente",
      });
    }
  }
  static async deleteUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) {
        return res.status(400).json({
          error: true,
          msg: "[UserController.deleteUser] No se borro con exito.",
        });
      }

      const usuarioBorrado = await UserModel.deleteUser(userId);

      return res.status(200).json({
        error: true,
        msg: "[UserController.deleteUser] El usuario se borro con exito",
      });
    } catch (error) {
      return res.status(200).json({
        error: true,
        msg: "[UserController.deleteUser.catch] El usuario no se borro con exito.",
      });
    }
  }

  static async signUp(req: Request, res: Response) {
    try {
      console.log("[UserController.signUp]");
      const userData = req.body;
      const result = UserModel.createUser(userData);
      res.json({
        error: false,
        message: "[UserController.signUp] Usuario registrado con éxito",
        data: userData,
      });
    } catch (error) {
      res.json({
        error: true,
        message: `[UserController.signUp] Error al registrar usuario, ${
          error instanceof Error ? error.message : JSON.stringify(error)
        }`,
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.loginUser(email, password);
      res.json({
        error: false,
        message: "[UserController] Login exitoso",
        data: user,
      });
    } catch (error) {
      res.status(401).json({
        error: true,
        message: `[UserController] Login fallido, ${
          error instanceof Error ? error.message : JSON.stringify(error)
        }`,
      });
    }
  }
}

export { UserController };
