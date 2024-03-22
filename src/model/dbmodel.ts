import  dbConfig from "../db/db"
import {Sequelize,DataTypes} from "sequelize"



const sequelize =new  Sequelize(

dbConfig.DB,

dbConfig.USER,
dbConfig.PASSWORD,

{


host:dbConfig.HOST,
dialect:"mysql"
}



)