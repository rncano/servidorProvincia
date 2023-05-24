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
class ProvinciaModel {
    constructor() {
        this.config(); //aplicamos la conexion con la BD.
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = yield (0, promise_1.createPool)({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'bdprovincia',
                connectionLimit: 10
                //host:'bxqorjm2x4whcm29z6vn-mysql.services.clever-cloud.com' ,
                //user:'udpjgpm11l3pjdsi' ,
                //password: 'tdKIvVKnro1ICxhBWbUj',
                //database: 'bxqorjm2x4whcm29z6vn' ,
                //connectionLimit: 10
            });
        });
    }
    /* Nota: Aqui cada uno tiene que setear los parametros de su propio servidor MySQL / MariaDB.*/
    listarProvincia() {
        return __awaiter(this, void 0, void 0, function* () {
            //const db=this.connection;
            const provincias = yield this.db.query('SELECT * FROM provincias');
            //console.log(provincias[0]);
            //devuelve tabla mas propiedades. Solo debemos devolver tabla. Posicion 0 del array devuelto.
            return provincias[0];
        });
    }
    //Devuelve un objeto cuya fila en la tabla provincias coincide con id.
    //Si no la encuentra devuelve null
    buscarIdProvincia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM provincias WHERE id = ?', [id]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve un objeto cuya fila en la tabla usuarios coincide con nombre.
    //Si no la encuentra devuelve null
    buscarNombreProvincia(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield this.db.query('SELECT * FROM provincias WHERE nombre = ?', [nombre]);
            //Ojo la consulta devuelve una tabla de una fila. (Array de array) Hay que desempaquetar y obtener la unica fila al enviar
            if (encontrado.length > 1)
                return encontrado[0][0];
            return null;
        });
    }
    //Devuelve 1 si logro crear una nueva provincia  de la tabla provincias
    crearProvincia(provincia) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('INSERT INTO provincias (nombre,capital, descripcion,imagen) VALUES(?,?,?,?)', [provincia.nombre,
                provincia.capital,
                provincia.descripcion,
                provincia.imagen]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro actualizar el usuario indicado por id
    actualizarProvincia(provincia, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.db.query('UPDATE provincias SET ? WHERE ID = ?', [provincia, id]))[0].affectedRows;
            console.log(result);
            return result;
        });
    }
    //Devuelve 1 si logro eliminar el usuario indicado por id
    eliminarProvincia(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincia = (yield this.db.query('DELETE FROM provincias WHERE ID = ?', [id]))[0].affectedRows;
            console.log(provincia);
            return provincia;
        });
    }
}
//Exportamos el objeto userModel con 
const provinciaModel = new ProvinciaModel();
exports.default = provinciaModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2lhTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL3Byb3ZpbmNpYU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBRzVDLE1BQU0sY0FBYztJQUVuQjtRQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQztJQUNsRCxDQUFDO0lBRUssTUFBTTs7WUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBQSxvQkFBVSxFQUFDO2dCQUMxQixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGVBQWUsRUFBRSxFQUFFO2dCQUNuQiwrREFBK0Q7Z0JBQy9ELDJCQUEyQjtnQkFDM0IsbUNBQW1DO2dCQUNuQyxvQ0FBb0M7Z0JBQ3BDLHFCQUFxQjthQUNyQixDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7SUFDRCwrRkFBK0Y7SUFDekYsZUFBZTs7WUFDcEIsMkJBQTJCO1lBQzNCLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUNuRSw2QkFBNkI7WUFDN0IsNkZBQTZGO1lBQzdGLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVELHNFQUFzRTtJQUN0RSxrQ0FBa0M7SUFDNUIsaUJBQWlCLENBQUMsRUFBVTs7WUFDakMsTUFBTSxVQUFVLEdBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0YsMEhBQTBIO1lBQzFILElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN4QixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FBQTtJQUNELHdFQUF3RTtJQUN4RSxrQ0FBa0M7SUFDNUIscUJBQXFCLENBQUMsTUFBYzs7WUFDekMsTUFBTSxVQUFVLEdBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkcsMEhBQTBIO1lBQzFILElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN4QixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FBQTtJQUVELHVFQUF1RTtJQUVqRSxjQUFjLENBQUMsU0FBb0I7O1lBQ3hDLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyw2RUFBNkUsRUFDakgsQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDakIsU0FBUyxDQUFDLE9BQU87Z0JBQ2pCLFNBQVMsQ0FBQyxXQUFXO2dCQUNyQixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUQsMkRBQTJEO0lBQ3JELG1CQUFtQixDQUFDLFNBQW9CLEVBQUUsRUFBVTs7WUFDekQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDOUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVELHlEQUF5RDtJQUNuRCxpQkFBaUIsQ0FBQyxFQUFVOztZQUNqQyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3JHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUFBO0NBRUQ7QUFFRCxxQ0FBcUM7QUFFckMsTUFBTSxjQUFjLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7QUFDNUQsa0JBQWUsY0FBYyxDQUFDIn0=