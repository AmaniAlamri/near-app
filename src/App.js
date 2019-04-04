/* eslint-disable no-loop-func */
import React, { Component } from "react";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import swal from 'sweetalert';

//AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0 key


class App extends Component {

  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0,
      places: [],
      // placeInfo: [],
      // type: "",
      // allname: []
    };
  }

  renderMap = () => {
    loadScript(
      //load the Maps JavaScript API
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0&callback=initMap"
    );
    window.initMap = this.initMap;//callback initMap 
  };

  
  getPlace = () => {
    var pos= {};//position 
    let that = this;

    //to make sure there is no markers and places on the map
    that.setState(() => ({
      places:[]
    }))

    var category = document.getElementById("category");

    //get the type "value" of place
    var categoryVal = category.options[category.selectedIndex].value;

    //find current location of user based on latitude and longitude values
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

      //add current location to state 
        that.setState(
          {
            lat: pos.lat,
            lng: pos.lng
          },
        that.renderMap()//render the map after get lat and lng
        );

        //Display nearest place based on type
        const endPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
          that.state.lat
        },${
          that.state.lng
        }&radius=1500&type=${categoryVal}&key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0`;

        axios.get(endPoint).then(response => {

          //display an alert in case of there is no near place
          if (response.data.results.length===0){

            swal("Sorry!!", "There is no place near to you!");
          }

          else{
          that.setState(
            {
              places: response.data.results
            },
            that.renderMap()//render the map after get places
          );
          console.log(that.state.places);

          //iterate over all response data name
          for (let i = 0; i < response.data.results.length; i++){
            if (response.data.results[i].name !== "undefined") {

              //add all names of places into array
              //that.state.allname.push(response.data.results[i].name);

            //  console.log(that.state.allname);
              
            //add the name of place to the name of state 
              that.setState({ name: response.data.results[0].name });

            //  console.log(response.data.results[0].name);
            //  console.log(that.state.placeInfo);
            }//close if
          }//close for
          }//close else
        });
      });
    }
  };


  startMap = () => {
    var pos= {};//position 
    let that = this;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      //add current location to state 
        that.setState(
          {
            lat: pos.lat,
            lng: pos.lng
          },
        that.renderMap()//render the map after get lat and lng
        );
      });
    }
  };



  // getAllPlace = () => {
  //   const Place =
  //     "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0&libraries=geometry,places";
  //   axios.get(Place).then(response => {
  //     console.log(response);
  //   });
  // };

  initMap = () => {
    let that = this;
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: that.state.lat, lng: that.state.lng }, //Riyadh-Current Location
      zoom: 11
    });


    //create info window
    var infoWindow = new window.google.maps.InfoWindow();

    for (let i = 0; i < that.state.places.length; i++) {
      console.log(that.state.places[i].name);

      //create a marker
      var marker = new window.google.maps.Marker({
        position: {
          lat: this.state.places[i].geometry.location.lat,
          lng: this.state.places[i].geometry.location.lng
        },
        map: map,
        title: this.state.places[i].name
      });

      marker.addListener("click", function() {

        //empty string used to assign value of opening state
        var oepnNow = "";

        // var y = obj.hasOwnProperty("name");
        if (typeof that.state.places[i].opening_hours === "undefined") {
          oepnNow = "The business time is not specified";
        } else {
          oepnNow = that.state.places[i].opening_hours.open_now ? "Yes" : "No";
        }

        infoWindow.setContent(
          `<p> Name: ${that.state.places[i].name}</p>\nOpen Now: ${oepnNow}`
        );

        //open info window
        infoWindow.open(map, marker);
      });
    }

    
  }; //close initMap

  //request:
  // location , radius 50 000 m max-
  //keyword type
  //openNow true,false
  //You must also pass a callback method to nearbySearch(),
  // to handle the results object and google.maps.places.
  //PlacesServiceStatus response.
  // data then marker
  // display = e => {
  //   console.log(e.target.id);
  //   //     this.setState({type:e.target.value})
  //   // console.log(this.state.type)
  //   console.log("display");
  //   const url =
  //     "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0";
  //   axios
  //     .get(url)
  //     .then(response => {
  //       console.log(response.data.candidates);
  //     })
  //     .catch(err => console.log(err));
  //   var pos = {};
  //   let that = this;
  //   //find current location of user
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //       that.setState({
  //         lat: pos.lat,
  //         lng: pos.lng
  //       });
  //       //Display ATM type
  //       const endPoint = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
  //         that.state.lat
  //       },${
  //         that.state.lng
  //       }&radius=1500&type=atm&key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0`;
  //       axios.get(endPoint).then(response => {
  //         console.log(response);
  //         // var allname = [];
  //         // for (let i = 0; i < response.data.results.length; i++)
  //         //   allname.push(response.data.results[i].name);
  //         // console.log(allname);
  //         that.setState({ name: response.data.results[0].name });
  //         console.log(response.data.results[0].name);
  //         console.log(that.state.placeInfo);
  //       });
  //     });
  //   }
  // }; //close display


  componentDidMount = () => {
    
    this.startMap()
    let that=this;
    that.setState(() => ({
      places:[]
    }))
    //this.renderMap()
    // this.initMap();
    // this.getPlace();
  };


  render() {
    // console.log(this.state);

    return (
      <div className="">
        <main>
          <div className="container">
            <div className="row App-div">
              <div className="col-4">
                <br />
                <h4>Welcome to Near me App!!</h4>
                <hr />
                <div className="row App-div justify-content-center">
                  <p id="paragraph">
                    Please select the type of place that you're looking for:
                  </p>
                  <select id="category">
                    <option value="accounting">Accounting</option>
                    <option value="airport">Airport</option>
                    <option value="art_gallery">Art Gallery</option>
                    <option value="atm">Atm</option>
                    <option value="bakery">Bakery</option>
                    <option value="bank">Bank</option>
                    <option value="beauty_salon">Beauty Salon</option>
                    <option value="bicycle_store">Bicycle Store</option>
                    <option value="book_store">Book Store</option>
                    <option value="cafe">Cafe</option>
                    <option value="car_rental">Car Rental</option>
                    <option value="car_repair">Car Repair</option>
                    <option value="car_wash">Car Wash</option>
                    <option value="clothing_store">Clothing Store</option>
                    <option value="convenience_store">Convenience Store</option>
                    <option value="courthouse">Courthouse</option>
                    <option value="dentist">Dentist</option>
                    <option value="electronics_store">Electronics Store</option>
                    <option value="embassy">Embassy</option>
                    <option value="fire_station">Fire Station</option>
                    <option value="florist">Florist</option>
                    <option value="furniture_store">Furniture Store</option>
                    <option value="gas_station">Gas Station</option>
                    <option value="gym">Gym</option>
                    <option value="hair_care">Hair Care</option>
                    <option value="hospital">Hospital</option>
                    <option value="insurance_agency">Insurance Agency</option>
                    <option value="jewelry_store">Jewelry Store</option>
                    <option value="laundry">Laundry</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="locksmith">Locksmith</option>
                    <option value="lodging">Lodging</option>
                    <option value="meal_delivery">Meal Delivery</option>
                    <option value="mosque">Mosque</option>
                    <option value="movie_theater">Movie Theater</option>
                    <option value="moving_company">Moving Company</option>
                    <option value="museum">Museum</option>
                    <option value="painter">Painter</option>
                    <option value="park">Park</option>
                    <option value="parking">Parking</option>
                    <option value="pet_store">Pet Store</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="physiotherapist">Physiotherapist</option>
                    <option value="plumber">Plumber</option>
                    <option value="police">Police</option>
                    <option value="post_office">Post Office</option>
                    <option value="real_estate_agency">
                      Real Estate Agency</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="roofing_contractor">Roofing Contractor</option>
                    <option value="school">School</option>
                    <option value="shoe_store">Shoe Store</option>
                    <option value="shopping_mall">Shopping Mall</option>
                    <option value="spa">Spa</option>
                    <option value="stadium">Stadium</option>
                    <option value="store">Store</option>
                    <option value="supermarket">Supermarket</option>
                    <option value="train_station">Train Station</option>
                    <option value="restaurant">Travel Agency</option>
                    <option value="veterinary_care">Veterinary Care</option>
                    <option value="zoo">Zoo</option>
                  </select>

                  <Button size="m" onClick={this.getPlace}>
                    Find Near Me!!
                  </Button>

                </div>
              </div>

              <div className="col-8">
                <div id="map" />
                              {/* Hold map */}
              </div>
            </div>
            
          </div>
        </main>
      </div>
    );
  }
}

/*

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0&callback=initMap"
    async defer></script>
  </body>
*/

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
