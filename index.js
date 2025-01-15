import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config'
const app=express();
const port=process.env.PORT || 3000;
const URL=process.env.API_URL;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.post("/jokes",async (req,res)=>{
    const result=await axios.get(URL+"?type=single");
    res.render("index.ejs",{data:result.data});
    console.log(result.data);

})