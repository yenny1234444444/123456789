const getConnection = require('../../../interface/DBconn.js');

// User model
class Pro {
  constructor(imagen,nombre,marca,cantidad,disponible,valor,estado) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.marca = marca;
    this.cantidad = cantidad;
    this.disponible = disponible;
    this.valor = valor;
    this.estado = estado;
  }

  async createPro() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`INSERT INTO productos 
            (imagen,nombre,marca,cantidad,disponible,valor,estado)
            VALUES (?,?,?,?,?,?,?)`, [this.imagen, this.nombre,this.marca,this.cantidad,this.disponible,this.valor,this.estado]);

      // Obtén el ID del último registro insertado
      const proId = result.insertId;

      return { id: proId }; // Devuelve el ID del nuevo usuario
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

  async viewPro() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        imagen as imagen,
        nombre as nombre,
        marca as marca,
        cantidad as cantidad,
        disponible as disponible,
        valor as valor,
        estado as estado
        FROM productos
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los productos'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async update(proId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE productos
        SET imagen = ?,
        nombre = ?,
        marca = ?,
        cantidad = ?,
        disponible = ?,
        valor = ?,
        estado = ?
        WHERE id = ?
      `, [this.imagen, this.nombre,this.marca,this.cantidad,this.disponible,this.valor,this.estado,proId]);

      return { id: proId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar el producto'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async delete(proId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM productos
        WHERE id = ?
      `, [proId]);

      return { id: proId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar el producto'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = Pro;
