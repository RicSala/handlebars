import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import { create } from 'express-handlebars';
import { textColor } from './helpers.js';


const app = express();

const port = process.env.PORT || 3003;


const __dirname = path.resolve() //Solves the problems of __dirname in Windowns with ESModules. For some reason was not defined in Windows


// MIDLEWARES
app.use(express.static(path.join(__dirname, "public"))) //Serves the public folder as static


// app.engine('hbs', exphbs.engine(
//     {
//         defaultLayout: 'boilerplate',
//         layoutsDir: 'views/layouts/',
//         partialsDir: 'views/partials/',
//         helpers: {
//             test: (type) => { console.log("test") },
//         }
//     }

// ));

// HANDLEBARS SETUP
const hbs = create({

    defaultLayout: 'boilerplate',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/',
    extname: '.hbs',
    // Specify helpers which are only registered on this instance.
    helpers: {
        JSONstringify: function (object) {
            return JSON.stringify(object);
        },
        textColor: textColor
    }
});

// VIEWS AND ENGINE SETUP
app.engine('.hbs', hbs.engine);



app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"));




app.get('/home', (req, res) => {
    res.render('home'
        ,
        {
            helpers: {
                test: (type) => {
                    console.log("test")
                    return `${type} + esto es!`
                },
                // textColor: textColor
            }
        }

    );
}
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);


app.get('/public/my-script.js', (req, res) => {
    // read the string from your server-side file
    const myString = `
    <h1>This is a custom rating</h1>

<div class="rating-stars flex flex-row" id="rating-placeholder">
    <div class="star cursor-wait">⭐</div>
    <div class="star">⭐</div>
    <div class="star">⭐</div>
    <div class="star">⭐</div>
    <div class="star">⭐</div>
</div>`

    res.render('my-script', { myString });
});