# Leafy
Leafy helps you take care of your houseplants. Instead of relying on those cards that come with the plant when you bring it home from the nursery or googling each plant individually, Leafy helps you consolidate all your houseplants and their needs in one place. Find your plant(s), click 'Add' to save, and simply click on each plant to see detailed info on what it needs.

Leafy is best used on mobile.

### Leafy was created using React and deployed on Heroku - go to Leafy [here](https://leafyplantcare.herokuapp.com/)

### Technologies used:
- React
- MongoDB Atlas | Mongoose
- Express | Node JS
- Axios
- Bcrypt
- Heroku
- Bulma (CSS framework)
- Font Awesome

### How to install React and all the necessary dependencies

 `npm create-react-app leafy`
 `npm install`


### PLEASE NOTE - I built my own houseplant api using mongoDB as I was unable to find a houseplant api that suited my needs for this project. 

### How to set up the MongoDB Database
```
mongosh
use leafy
db.plants.insert( use data from database.json here )
```

### Project Planning
- [Figma mockups](https://www.figma.com/file/I6nmGdyPJtb4jX66IuJQ8P/Leafy?node-id=0%3A1)
- [Trello board](https://trello.com/b/7x0esrOw/leafy)

### Future improvements and implementations
- Give the user search results when they search a partial name of a plant or just one keyword
- Give plant suggestions as the user types in the search bar
- Utilise or build a more extensive houseplant api that has more data
- Allow the user identify their plant from a photo that they upload
- Allow the user to sort plants in alphabetical order
- Write unit tests
- Convert JavaScript to TypeScript