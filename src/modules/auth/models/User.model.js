const getConnection = require('../../../interface/DBconn.js');

// User model
class User {
  constructor(nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo) {
    this.nombreCompleto = nombreCompleto;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.contrasena = contrasena;
    this.rol = rol;
    this.estado = estado;
    this.correo = correo;
  }

  async createUser() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`INSERT INTO usuarios 
            (NOMBRE_COMPLETO,TIPO_DOCUMENTO,DOCUMENTO,CONTRASENA,ROL,ESTADO,CORREO)
            VALUES (?,?,?,?,?,?,?)`, [this.nombreCompleto, this.tipoDocumento,this.documento,this.contrasena,this.rol,this.estado,this.correo]);

      // Obtén el ID del último registro insertado
      const userId = result.insertId;

      return { id: userId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewUsers() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        NOMBRE_COMPLETO as nombreCompleto,
        TIPO_DOCUMENTO as tipoDocument,
        DOCUMENTO as documento,
        CONTRASENA as contrasena,
        ROL as rol,
        ESTADO as estado,
        CORREO as correo
        FROM usuarios
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los usuarios'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async updateUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE usuarios
        SET NOMBRE_COMPLETO = ?,
        TIPO_DOCUMENTO = ?,
        DOCUMENTO = ?,
        contrasena = ?,
        rol = ?,
        estado = ?,
        correo = ?
        WHERE id = ?
      `, [this.nombreCompleto, this.tipoDocumento,this.documento,this.contrasena,this.rol,this.estado,this.correo ,userId]);

      return { id: userId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async deleteUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM usuarios
        WHERE id = ?
      `, [userId]);

      return { id: userId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async findUser() {

    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT
        id,
        NOMBRE_COMPLETO as nombreCompleto,
        TIPO_DOCUMENTO as tipoDocument,
        DOCUMENTO as documento,
        CONTRASENA as contrasena,
        ROL as rol,
        ESTADO as estado,
        CORREO as correo
        FROM usuarios
        WHERE DOCUMENTO = ?
        AND CONTRASENA = ?`
        , [this.documento, this.contrasena, this.correo]);

      return result; // Devuelve el resultado de la consulta
    }
      catch (error) {
        throw {
          ok: false,
          statusCode: 500,
          data: 'Ocurrió un error al obtener el usuario'
        };
      } finally {
        connection.release(); // Libera la conexión de vuelta al pool
      } 
  }
}

module.exports = User;
