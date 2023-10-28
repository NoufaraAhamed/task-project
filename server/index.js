const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const ItemModel = require("./models/Items.jsx");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
      const item = await new ItemModel({
        itemName: response[i]["itemName"],
        itemCode: response[i]["itemCode"],
        categoryId: response[i]["categoryId"],
        landingCost: response[i]["landingCost"],
        sellingRate: response[i]["taxIncAmount"],
        stock: response[i]["stock"],
      });
      await item.save()
      .then((savedData) => {
        console.log(`${savedData}`);
      })
      .catch((err) => console.log(`error saving data ${err}`));
    }
  } catch (error) {
    console.error("Error fetching items from the external API:", error);
    
  }
}

getItems();

app.get("/getItems", async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Error fetching items" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
