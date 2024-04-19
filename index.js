const express = require('express');
const sql = require('mssql');
const config = require('./db/config');
const cors = require('cors');
const dotenv = require('dotenv');

// Creating express app
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.static('./front-end/build'));

// Connect to the database
sql.connect(config)
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.error('Database Connection Failed:', err));

// Define a route to test
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/task2', (req, res) => {
    sql.connect(config)
        .then(pool => {
            return pool.request()
                .query('SELECT TOP 20 * FROM SalesLT.Customer');
        })
        .then(result => {
            // console.log(result.recordset);
            res.send(result.recordset);
            sql.close();
        })
        .catch(err => {
            console.error('SQL Query Failed:', err);
            res.send('SQL Query Failed to load.');
            sql.close();
        });
})



app.get('/api/task3', (req, res) => {
    sql.connect(config)
        .then(pool => {
            return pool.request()
                .query(`SELECT 
                    p.Name AS ProductName,
                    p.Color,
                    p.Size,
                    p.Weight
                    FROM 
                        SalesLT.Product AS p
                    JOIN 
                    SalesLT.ProductCategory AS pc 
                    ON p.ProductCategoryID = pc.ProductCategoryID;`);
        })
        .then(result => {
            // console.log(result.recordset);
            res.send(result.recordset);
            sql.close();
        })
        .catch(err => {
            console.error('SQL Query Failed:', err);
            res.send('SQL Query Failed to load.');
            sql.close();
        });
})



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
