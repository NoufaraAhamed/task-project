const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const ItemModel = require("./models/Items.jsx");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

async function getItems() {
  try {
    const apiItems = await axios.get(
      "https://mysaleappinventoryapi-7lfpakcp7q-el.a.run.app/api/v1/Item",
      {
        headers: {
          dbName: "tradeapptestdb",
        },
      }
    );

    const response = await apiItems.data;
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      const item = new ItemModel({
        itemName: response[i]["itemName"],
        itemCode: response[i]["itemCode"],
        categoryName: response[i]["categoryName"],
        landingCost: response[i]["landingCost"],
        sellingRate: response[i]["sellingRate"],
        stock: response[i]["stock"],
      });
      await item.save();
    }
  } catch (error) {
    console.error("Error fetching items from the external API:", error);
    
  }
}

getItems();

app.get("/getItems", (req, res) => {
  ItemModel.find()
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
