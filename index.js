import express from "express";
import bodyParser from "body-parser";
import { router as userRoutes, users } from "./routes/users.js";

const app = express();
const PORT = 8000;

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// ------ HomePage ----------
app.get("/", (req, res) => {
  console.log(users);
  res.send("Hello Form Homepage !!");
});

// Mounts the routes defined in the userRoutes router onto the /users path
app.use("/users", userRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
