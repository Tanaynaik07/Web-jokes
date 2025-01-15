import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';
import path from "path";
const app=express();
const port=process.env.PORT || 3000;
const URL=process.env.API_URL;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

 
app.set("view engine", "ejs");  // Assuming 'views' is your folder for EJS files


// Serving static files from the 'public' directory
//for future use
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.post("/jokes", async (req, res) => {
    // Log the URL to make sure it's correct
    console.log("API URL: ", URL);
    
    try {
        const result = await axios.get(`${URL}?type=single`);
        res.render("index.ejs", { data: result.data });
        console.log(result.data);
    } catch (error) {
        console.error("Error fetching joke: ", error);
        res.status(500).send("Error fetching joke");
    }
});

// export default app;