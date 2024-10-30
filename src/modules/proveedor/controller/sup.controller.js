const Sup = require('../models/sup.model.js');

async function createSup(options) {
  const proveedor = new Sup(
    options.nombreCompleto, 
    options.tipoDocumento, 
    options.documento, 
    options.contrasena, 
    options.rol, 
    options.estado, 
    options.correo
  );

  try {
    supResult = await proveedor.createSup();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el proveedor'
    };
  }

  return {
    message: 'Proveedor creado exitosamente',
  };
}

async function viewSup() {
  const proveedor = new proveedor();
  let supResult;
  
  try {
    supResult = await proveedor.viewSup();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener los Proveedores'
    };
  }

  return  supResult;
}

async function updateSup(options) {
  const proveedor = new proveedor(
    options.nombreCompleto, 
    options.tipoDocumento, 
    options.documento, 
    options.contrasena, 
    options.rol, 
    options.estado, 
    options.correo
  );

  try {
    supResult = await proveedor.updateSup(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar el proveedor'
    };
  }

  return {
    message: 'proveedor actualizado exitosamente',
  };
}

async function deleteSup(options) {
  const proveedor = new proveedor();

  try {
    subResult = await proveedor.deleteSup(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el proveedor'
    };
  }

  return {
    message: 'proveedor eliminado exitosamente',
  };
}

module.exports = {
  createSup,
  viewSup,
  updateSup,
  deleteSup
};
