// Essa função é um facilitador do método db.exec do sqlite3
// transforma-a basicamente em uma função com três parametros
// 1- nome do banco de dados, 2- query SQL, 3- valores que irão entrar no db:

export const execute = async (db, sql, params = []) => {
  if (params && params.length > 0) {
    return new Promise((resolve, reject) => {
      db.run(sql, params, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};
