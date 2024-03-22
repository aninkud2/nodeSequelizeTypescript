interface DatabaseConfig {
    HOST: string;
    USER: string;
    DB: string;
    PASSWORD: string;
    dialect: string
}

const databaseConfig: DatabaseConfig = {
    HOST: "localhost",
    USER: "root",
    DB: "my sequel table",
    PASSWORD: "root",
    dialect:"mysql"
};

export default databaseConfig;
