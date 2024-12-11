import { connect } from "./DatabaseConnection";
import { ResultSetHeader, RowDataPacket } from "mysql2";

class DatabaseMethod {
    static async view(sql: { query: string; params: any[] }) {
        let connection;

        try {
            connection = await connect();
            const [rows] = await connection.execute<RowDataPacket[]>(sql.query, sql.params);
            return { error: false, mensaje: rows };
        } catch (error) {
            return {
                error: true,
                mensaje: error instanceof Error ? error.message : JSON.stringify(error),
            };
        } finally {
            if (connection) connection.end();
        }
    }

    static async execute({ query, params }: { query: string; params: any[] }) {
        let connection;

        try {
            connection = await connect();
            const [result] = await connection.execute<ResultSetHeader>(query, params);
            return result;
        } catch (error) {
            throw new Error(`[DatabaseMethod] Error ejecutando consulta: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
        } finally {
            if (connection) connection.end();
        }
    }

    static async findOne(sql: { query: string; params: any[] }): Promise<RowDataPacket | null> {
        let connection;

        try {
            connection = await connect();
            const [rows] = await connection.execute<RowDataPacket[]>(sql.query, sql.params);
            if (rows.length > 0) {
                return rows[0];
            }
            return null;
        } catch (error) {
            throw new Error(`[DatabaseMethod.FindOne] Error ejecutando consulta: ${error instanceof Error ? error.message : JSON.stringify(error)}`);
        } finally {
            if (connection) connection.end();
        }
    }
}

export { DatabaseMethod };
