# Finding Congress

#### By **Ian Cook Westgate**

## Description

In a world brimming over with breaking news, it's easy to get overwhelmed and feel powerless about what you hear. This site aims to overcome that feeling by presenting the news through a simple filter: you select your state, select the congressman/woman of your choice, type in an issue you'd like to hear their opinion on (or not), and then click a button. You're immediately presented with curated results from the News API and info on how to contact your representative to support (or chastise) them for their publicly declared stance on the matter.

## Depiction

![Home Page](src/assets/imgs/Finding-Congress-pic-1.PNG)
![Selection Page](src/assets/imgs/Finding-Congress-pic-2.PNG)

## Setup

* In your terminal, if you intend to view the code and want to make the React pages more legible, enter `apm install react`.
* Using your terminal, clone this repo by inputting `git clone https://github.com/iancookwestgate/capstone-project.git`.
* Navigate to the folder in the terminal by typing in: `cd Finding-Congress`.
* In your terminal, enter `npm install` to install necessary dependencies.
* Then enter `npm run start` to prep the project to be viewed.
* In your web browser, go to `http://localhost:8080/` to see the project.

## Site Features

* Pick your state from a select menu and then confirm with a search button.
* Select the representative you want to hear about (their info is retrieved from the ProPublica Congress API), optionally input an issue of interest, then confirm with one more search button.
* You are presented with a list of relevant news articles about what you searched from the News API.

## Planned Features

* The site is currently laid out to only track senators. It will eventually include details of House representatives too.
* The background/theme of the site will change based on what state you selected (to encourage the user to look into states beyond just their own).
* Incentives for the user to return to the site. This could take the form of remembering previous user searches and/or establishing a database so the user can save/recommend their searches to other users.

## Technologies Used

* HTML
* CSS
  * SCSS
* JavaScript
* Node Packet Manager (NPM)
* Babel
* Webpack
* React
* ESLint
* ProPublica Congress API (https://projects.propublica.org/api-docs/congress-api/)
* News API (https://newsapi.org/)

## Known Bugs

* The representatives do not receive images from the ProPublica Congress API. I need to find a different API to get them images based on the selected state.

## Support and contact details

_Email iancookwestgate@gmail.com with any questions._

## License

This software is licensed under the MIT license.

Copyright (c) 2019 **Ian Cook Westgate**
