(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},31:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),c=(a(30),a(16)),i=a(17),s=a(24),p=a(18),u=a(23),m=a(2),v=(a(31),a(55)),E=(a(7),a(19)),g=a.n(E),d=a(20),y=a.n(d);var h=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).renderMap=function(){!function(e){var t=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=e,a.async=!0,a.defer=!0,t.parentNode.insertBefore(a,t)}("https://maps.googleapis.com/maps/api/js?key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0&callback=initMap"),window.initMap=e.initMap},e.getPlace=function(){var t={},a=Object(m.a)(Object(m.a)(e));a.setState(function(){return{places:[]}});var n=document.getElementById("category"),o=n.options[n.selectedIndex].value;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){t={lat:e.coords.latitude,lng:e.coords.longitude},a.setState({lat:t.lat,lng:t.lng},a.renderMap());var n="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=".concat(a.state.lat,",").concat(a.state.lng,"&radius=1500&type=").concat(o,"&key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0");g.a.get(n).then(function(e){if(0===e.data.results.length)y()("Sorry!!","There is no place near to you!");else{a.setState({places:e.data.results},a.renderMap()),console.log(a.state.places);for(var t=0;t<e.data.results.length;t++)"undefined"!==e.data.results[t].name&&a.setState({name:e.data.results[0].name})}})})},e.startMap=function(){var t={},a=Object(m.a)(Object(m.a)(e));navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){t={lat:e.coords.latitude,lng:e.coords.longitude},a.setState({lat:t.lat,lng:t.lng},a.renderMap())})},e.initMap=function(){for(var t=Object(m.a)(Object(m.a)(e)),a=new window.google.maps.Map(document.getElementById("map"),{center:{lat:t.state.lat,lng:t.state.lng},zoom:11}),n=new window.google.maps.InfoWindow,o=function(o){console.log(t.state.places[o].name),(r=new window.google.maps.Marker({position:{lat:e.state.places[o].geometry.location.lat,lng:e.state.places[o].geometry.location.lng},map:a,title:e.state.places[o].name})).addListener("click",function(){var e="";e="undefined"===typeof t.state.places[o].opening_hours?"The business time is not specified":t.state.places[o].opening_hours.open_now?"Yes":"No",n.setContent("<p> Name: ".concat(t.state.places[o].name,"</p>\nOpen Now: ").concat(e)),n.open(a,r)})},l=0;l<t.state.places.length;l++){var r;o(l)}},e.componentDidMount=function(){e.startMap(),Object(m.a)(Object(m.a)(e)).setState(function(){return{places:[]}})},e.state={lat:0,lng:0,places:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:""},o.a.createElement("main",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row App-div"},o.a.createElement("div",{className:"col-4"},o.a.createElement("br",null),o.a.createElement("h4",null,"Welcome to Near me App!!"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row App-div justify-content-center"},o.a.createElement("p",{id:"paragraph"},"Please select the type of place that you're looking for:"),o.a.createElement("select",{id:"category"},o.a.createElement("option",{value:"accounting"},"Accounting"),o.a.createElement("option",{value:"airport"},"Airport"),o.a.createElement("option",{value:"art_gallery"},"Art Gallery"),o.a.createElement("option",{value:"atm"},"Atm"),o.a.createElement("option",{value:"bakery"},"Bakery"),o.a.createElement("option",{value:"bank"},"Bank"),o.a.createElement("option",{value:"beauty_salon"},"Beauty Salon"),o.a.createElement("option",{value:"bicycle_store"},"Bicycle Store"),o.a.createElement("option",{value:"book_store"},"Book Store"),o.a.createElement("option",{value:"cafe"},"Cafe"),o.a.createElement("option",{value:"car_rental"},"Car Rental"),o.a.createElement("option",{value:"car_repair"},"Car Repair"),o.a.createElement("option",{value:"car_wash"},"Car Wash"),o.a.createElement("option",{value:"clothing_store"},"Clothing Store"),o.a.createElement("option",{value:"convenience_store"},"Convenience Store"),o.a.createElement("option",{value:"courthouse"},"Courthouse"),o.a.createElement("option",{value:"dentist"},"Dentist"),o.a.createElement("option",{value:"electronics_store"},"Electronics Store"),o.a.createElement("option",{value:"embassy"},"Embassy"),o.a.createElement("option",{value:"fire_station"},"Fire Station"),o.a.createElement("option",{value:"florist"},"Florist"),o.a.createElement("option",{value:"furniture_store"},"Furniture Store"),o.a.createElement("option",{value:"gas_station"},"Gas Station"),o.a.createElement("option",{value:"gym"},"Gym"),o.a.createElement("option",{value:"hair_care"},"Hair Care"),o.a.createElement("option",{value:"hospital"},"Hospital"),o.a.createElement("option",{value:"insurance_agency"},"Insurance Agency"),o.a.createElement("option",{value:"jewelry_store"},"Jewelry Store"),o.a.createElement("option",{value:"laundry"},"Laundry"),o.a.createElement("option",{value:"lawyer"},"Lawyer"),o.a.createElement("option",{value:"locksmith"},"Locksmith"),o.a.createElement("option",{value:"lodging"},"Lodging"),o.a.createElement("option",{value:"meal_delivery"},"Meal Delivery"),o.a.createElement("option",{value:"mosque"},"Mosque"),o.a.createElement("option",{value:"movie_theater"},"Movie Theater"),o.a.createElement("option",{value:"moving_company"},"Moving Company"),o.a.createElement("option",{value:"museum"},"Museum"),o.a.createElement("option",{value:"painter"},"Painter"),o.a.createElement("option",{value:"park"},"Park"),o.a.createElement("option",{value:"parking"},"Parking"),o.a.createElement("option",{value:"pet_store"},"Pet Store"),o.a.createElement("option",{value:"pharmacy"},"Pharmacy"),o.a.createElement("option",{value:"physiotherapist"},"Physiotherapist"),o.a.createElement("option",{value:"plumber"},"Plumber"),o.a.createElement("option",{value:"police"},"Police"),o.a.createElement("option",{value:"post_office"},"Post Office"),o.a.createElement("option",{value:"real_estate_agency"},"Real Estate Agency"),o.a.createElement("option",{value:"restaurant"},"Restaurant"),o.a.createElement("option",{value:"roofing_contractor"},"Roofing Contractor"),o.a.createElement("option",{value:"school"},"School"),o.a.createElement("option",{value:"shoe_store"},"Shoe Store"),o.a.createElement("option",{value:"shopping_mall"},"Shopping Mall"),o.a.createElement("option",{value:"spa"},"Spa"),o.a.createElement("option",{value:"stadium"},"Stadium"),o.a.createElement("option",{value:"store"},"Store"),o.a.createElement("option",{value:"supermarket"},"Supermarket"),o.a.createElement("option",{value:"train_station"},"Train Station"),o.a.createElement("option",{value:"restaurant"},"Travel Agency"),o.a.createElement("option",{value:"veterinary_care"},"Veterinary Care"),o.a.createElement("option",{value:"zoo"},"Zoo")),o.a.createElement(v.a,{size:"m",onClick:this.getPlace},"Find Near Me!!"))),o.a.createElement("div",{className:"col-8"},o.a.createElement("div",{id:"map"}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.dbe58790.chunk.js.map