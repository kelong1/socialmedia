const path=require("path")
const express=require("express");
const app=express();
const PostUrls=require("./routes/PostRoute")
const UserUrls=require("./routes/UserRoute")

const dotenv=require("dotenv")
const cors=require("cors")
const mongoose=require("mongoose")

dotenv.config()

mongoose.connect(process.env.DATABASE,()=>console.log("Database is connected"))

app.use(express.json())
app.use(cors())

app.use("/app/users",UserUrls)
app.use("/app/posts",PostUrls)

app.listen(process.env.PORT,()=>console.log("Port is running at 9500"))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } 

