"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
class UserModel {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, promise_1.createPool)({
                //host: 'localhost',
                //user: 'root',
                //password: '',
                //database: 'bdprovincia',
                //connectionLimit: 10
                host: 'bxqorjm2x4whcm29z6vn-mysql.services.clever-cloud.com',
                user: 'udpjgpm11l3pjdsi',
                password: 'tdKIvVKnro1ICxhBWbUj',
                database: 'bxqorjm2x4whcm29z6vn',
                connectionLimit: 10
            });
        });
    }
    /* Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.*/
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const [usuarios] = yield this.db.query('SELECT * FROM usuarios');
            console.log(usuarios[0]);
            //console.log(usuarios[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return usuarios;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con id.
    //Si no la encuentra devuelve null
    buscarId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [encontrado] = yield this.db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado[0])
                return encontrado[0];
            return null;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
    //Si no la encuentra devuelve null
    buscarNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro crear un nuevo usuario de la tabla usuarios
    crear(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO usuarios (nombre,email, password,rol) VALUES(?,?,?,?)', [usuario.nombre,
                usuario.email,
                usuario.password,
                usuario.rol]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro actualizar el usuario indicado por id
    actualizar(usuario, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE usuarios SET ? WHERE ID = ?', [usuario, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro eliminar el usuario indicado por id
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.db.query('DELETE FROM usuarios WHERE ID = ?', [id]))[0].affectedRows;
            console.log(user);
            return user;
        });
    }
}
//Exportamos el objeto userModel con 
const userModel = new UserModel();
exports.default = userModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy91c2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFLNUMsTUFBTSxTQUFTO0lBRWQ7UUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDbEQsQ0FBQztJQUVLLE1BQU07O1lBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUEsb0JBQVUsRUFBQztnQkFDMUIsb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNmLGVBQWU7Z0JBQ2YsMEJBQTBCO2dCQUMxQixxQkFBcUI7Z0JBQ3JCLElBQUksRUFBQyxzREFBc0Q7Z0JBQzNELElBQUksRUFBQyxrQkFBa0I7Z0JBQ3ZCLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGVBQWUsRUFBRSxFQUFFO2FBQ25CLENBQUMsQ0FBQztRQUNKLENBQUM7S0FBQTtJQUNELCtGQUErRjtJQUd6RixNQUFNOztZQUNYLDJCQUEyQjtZQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsMkJBQTJCO1lBQzNCLDZGQUE2RjtZQUM3RixPQUFPLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFRCxvRUFBb0U7SUFDcEUsa0NBQWtDO0lBQzVCLFFBQVEsQ0FBQyxFQUFVOztZQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0YsMEhBQTBIO1lBQzFILElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDO0tBQUE7SUFDRCx3RUFBd0U7SUFDeEUsa0NBQWtDO0lBQzVCLFlBQVksQ0FBQyxNQUFjOztZQUNoQyxNQUFNLFVBQVUsR0FBUSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRywwSEFBMEg7WUFDMUgsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3hCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQztLQUFBO0lBRUQsaUVBQWlFO0lBQzNELEtBQUssQ0FBQyxPQUFnQjs7WUFDM0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1FQUFtRSxFQUN2RyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dCQUNmLE9BQU8sQ0FBQyxLQUFLO2dCQUNiLE9BQU8sQ0FBQyxRQUFRO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUQsMkRBQTJEO0lBQ3JELFVBQVUsQ0FBQyxPQUFnQixFQUFFLEVBQVU7O1lBQzVDLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQzFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFRCx5REFBeUQ7SUFDbkQsUUFBUSxDQUFDLEVBQVU7O1lBQ3hCLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FBQTtDQUNEO0FBRUQscUNBQXFDO0FBRXJDLE1BQU0sU0FBUyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7QUFDN0Msa0JBQWUsU0FBUyxDQUFDIn0=