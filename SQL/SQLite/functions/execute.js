// Essa função é um facilitador do método db.exec do sqlite3
// transforma-a basicamente em uma função com dois parametros
// 1- nome do banco de dados, 2- query SQL:

export const execute = async (db, sql) => {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};
