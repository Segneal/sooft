const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const year = new Date().getFullYear();
const uri = process.env.URI || "mongodb://127.0.0.1:27017/sooft";
const dataURL = `http://nolaborables.com.ar/api/v2/feriados/${year}`;
const collection = "feriados";

const Document = mongoose.model(
  "Document",
  {
    motivo: String,
    tipo: String,
    info: String,
    dia: Number,
    mes: Number,
    id: String,
  },
  collection
);

const populate = () =>
  axios
    .get(dataURL)
    .then((response) => {
      const documents = response.data;

      Document.insertMany(documents)
        .then((result) => {})
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });

const dbIsEmpty = async () => {
  const count = await Document.countDocuments();
  return count === 0;
};

const MongoDBConection = async () => {
  try {
    await mongoose.connect(uri);
    if (await dbIsEmpty()) {
      await populate();
    } else {
      console.log("Database is not empty");
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

MongoDBConection().then(() => {
  setTimeout(() => {
    mongoose.connection.close();
  }, 2000);
});
