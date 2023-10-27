const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/tradeapptestdb');

const itemSchema = new mongoose.Schema({
    
})

const Item = mongoose.model('Item', itemSchema);


app.get('/api/v1/Item', async (req, res) => {
    try {
        const response = await axios.get('https://mysaleappinventoryapi-7lfpakcp7q-el.a.run.app', {
      headers: {
        dbName: 'tradeapptestdb',
    },
});

const items = response.data;
console.log(response.data);
res.json(items);

} catch (error) {
console.error('Error fetching items from the external API:', error);
res.status(500).json({ error: 'Failed to fetch items' });
}
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});