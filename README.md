# RoullEat


## Summary

This project was made with the purpose of providing a local restaurant searcher that returns a local restaurant at random, for those nights when you just can't decide what to eat. Using React.js, and Maptiler API, I was able to provide a clean, modern UI to display a random local restaurant, the categories the restaurant falls under, the address, as well as five-star rating system to help the user decide if this restaurant is one they would actually like to dine at. I started by incorporating the Maptiler API as a base map and search bar, as well as a preset set of coordinates coordinates (unfortunately the search returned coordinates stopped working and I was unable to resolve this). I then took those coordinates and used them to search for restaurants in a 5 mile radius by fetching a JSON file provided by Yelp. This JSON file is also where I was able to pull all of the restaurant information from, and using CSS was able to neatly display in a table. With media queries I was able to provide a portrait/mobile experience that is much different than the landscape/desktop experience, while in lanscape, the table appers consistantly next to the map, while in the portait orientation, the map takes up the main focus of the screen, but while you hover over the small, colored circle, it expands into the information table, taking the place of the map. While I wasn't able to get the map coordinates and the location to work well with each other, the location can still be marked on the map by simply copying the address and pastiing it into the search bar. Right now the search is limited to the Indianapolis metropolitan area of Indiana.
Some AI was used in creating this project, mostly for formatting and corrections.


## Installation and Operation

1. **Clone** donwn the repository
2. **Install** the *React* node modules by copying the text below into your terminal
  > npm install react react-dom
3. **API Key** Users must obtain an API key from <a href="maptiler.com">Maptiler</a> and apply it in *map.jsx*, replacing the text <ins>YOUR_API_KEY_HERE"</ins>
4. Then in the terminal copy the text below
  > cd my-react-map
5. followed by **ENTER**
6. Then copy
  > npm run dev
7. Followed by **ENTER**
8. **Click The Link** to the localhost server to open the web app
