import express from 'express';
import path from 'path';

const app = express();

const port = 3000;
const dirname = './';

app.use(express.static("public"));
// Configure express.json() with raw body access for webhook signature verification
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  }
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

// Serve static files (CSS, JS, images)

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});