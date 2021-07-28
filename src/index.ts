import express from "express";

const app = express();
app.use(express.json());

const books: any = [
    {img: "https://images.gr-assets.com/books/1411114164l/33.jpg", name: 'The Lord of the Rings', author: 'J.R.R.Tolkien', genre: 'Fantacy', rating: 10}, 
    {img: "https://images.gr-assets.com/books/1388282444l/386162.jpg", name: 'The Hitchhiker’s Guide to the Galaxy', author: 'Douglas Adams', genre: 'Fiction', rating: 8},
    {img: "https://images.gr-assets.com/books/1434908555l/234225.jpg", name: 'Dune', author: 'Frank Herbert', genre: 'Fiction', rating: 7}
    ]

app.get('/api/books', (req: any, res: any) => {
    res.send(books);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));