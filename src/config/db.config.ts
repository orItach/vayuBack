export const config = {
    HOST: "localhost",
    USER: "user",
    PASSWORD: "password",
    DB: "mydatabase",
    dialect: "mysql",
    pool: {
      max: 3,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}

export const dialect = "mysql";