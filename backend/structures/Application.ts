import express,{Express} from "express";
import { config } from "dotenv";config()
import home from '../routes/home'

export class Application {
    public app: Express
    public port: string = process.env!.PORT! || '3001'
    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.loadRoutes()
        this.app.listen(this.port,()=>{
            console.log(`server hosted at http://localhost:${this.port}`)
        })
    }

    loadRoutes(){
        this.app.use(home)
    }

}