const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProfileSchema = new Schema({
  image: String,
  title: String,
  info: String,
  website: String
});

var Profile = mongoose.model("Profile", ProfileSchema);

// Profile.create(
//   {
//     image: "https://i.gyazo.com/aa580dd00976b154da32c0361c9f01b6.jpg",
//     title: "Crystal Collector",
//     info:
//       "Crystal Collector is a simple math game consisting on accumulating crystals without exceeding the maximum value. The game was fully built on JQuery and you can see the site by following this.",
//     website: "https://gerardofer.github.io/jQuery-Game/"
//   },
//   {
//     image: "https://i.gyazo.com/dbcd9147f1530a9fbf2079925259f142.png",
//     title: "FriendFinder",
//     info:
//       "As it's name say it, this application is a friend matching website.  After answering a few questions, FriendFinder will look within its database (temporary data base since it lives in the broswer session) and select the best suitable candidate.  Please use the link below to see the repo in Github.",
//     website: "https://github.com/Gerardofer/friendFinder"
//   },
//   {
//     image: "https://i.gyazo.com/4182b9e52a27e69902819779782b4f04.png",
//     title: "Liri-CLI",
//     info:
//       "Liri-CLI is like Siri but with written commands.  The application uses API calls to twitter, OMDB, and Spotify and shows the reponses back in the console.  You can see the repo for the application following the link.",
//     website: "https://github.com/Gerardofer/liri-node-app"
//   },
//   {
//     image: "https://i.gyazo.com/791c9806b5481f2096f0c7a23e5f4b53.jpg",
//     title: "GifTastic",
//     info:
//       "GifTastic is a Front End application that makes API calls to a GIF repository based ob the characters you provide.  It could be you favorite hero, villain, Sitcome character, etc.  Or maybe you'd like to see a more serious character become the center of a GIF stunt? Take GifTastic for a spin to see what you come up with!.",
//     website: "https://gerardofer.github.io/GifTastic/"
//   },
//   {
//     image: "https://i.gyazo.com/61f534b804f0d2b3aa929869f39db686.png",
//     title: "Train Time",
//     info:
//       "This application leverages the use of real time updates available in Firebase to display a certain train time and information.  No API calls are necessary since Firebase is a database that runs simultaneously with browser activity.",
//     website: "https://gerardofer.github.io/TrainTime/"
//   },
//   {
//     image: "https://i.gyazo.com/d6432ff69b0b519d2afb1e29542aafbc.png",
//     title: "Eat Da Burger",
//     info:
//       "This is a full stack application that saves user input into a MySQL data base, and makes a call to the database to display all of the information available.  You can see the app deployed in Heroku.",
//     website: "https://burger-fullstack.herokuapp.com/"
//   },
//   (err, profiles) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Collection added!");
//     }
//   }
// );

module.exports = Profile;
