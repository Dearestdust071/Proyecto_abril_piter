import express from "express";
import { SERVER_PORT } from "../../global/Environment";
import http from "http";
import exp from "constants";

export default class ServerConfig {
  private static _instance: ServerConfig;
  public app: express.Application;
  public port: number;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
  }

  public static get instance(){

    return this._instance || (this._instance = new this());
  }


  // Se carga cuando hagas un ng serve (para que todo lo que este dentro de la funcion se cargue)
  start(callback:any){
    this.httpServer.listen(this.port, callback);
  }






}
