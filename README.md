# Leafy
Leafy helps you take care of your houseplants. Instead of relying on those cards that come with the plant when you bring it home from the nursery or googling each plant individually, Leafy helps you consolidate all your houseplants and their needs in one place. Find your plant(s), click 'Add' to save, and simply click on each plant to see detailed info on what it needs.

### Go to Leafy [here](https://leafyplantcare.herokuapp.com/)

### Technologies used:
- React
- MongoDB
- Express/Node JS
- Axios
- Bcrypt
- Heroku
- Bulma (CSS framework)
- Font Awesome

### PLEASE NOTE - I built my own houseplant api using mongoDB as I was unable to find a houseplant api that suited my needs for this project. 

### Set up MongoDB Database
```
mongosh
use leafy
db.plants.insert( use data from database.json here )
```

### Project Planning
- [Figma mockups](https://www.figma.com/file/I6nmGdyPJtb4jX66IuJQ8P/Leafy?node-id=0%3A1)
- [Trello board](https://trello.com/b/7x0esrOw/leafy)

### Future improvements and implementations
- Give plant suggestions as the user types in the search bar
- Utilise or build a more extensive houseplant api that has more data
- Allow the user identify their plant from a photo that they take/upload
- Unit tests
- Typescript