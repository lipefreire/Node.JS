import mongoose from "mongoose"

mongoose.connect("mongodb+srv://felipe:123@felipe.2qt5amq.mongodb.net/felipe-node")

let db = mongoose.connection;
export default db;