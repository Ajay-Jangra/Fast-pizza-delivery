import React from "react";
import { Link } from "react-router-dom";
import "./explore.css";

const Explore = () => {
  return (
    <>
      <div className="exploreSection">
        <div className="exploreInside">
          <p className="exHeading">Explore other options for you here</p>
          <div className=" cuisines exlinks">
            <p className="nearMeHeading">Popular cuisines near me</p>
            <div>
              <Link to="/bakery-restaurants-near-me" className="nearByLink">
                Bakery food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/beverages-restaurants-near-me" className="nearByLink">
                Beverages food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/biryani-restaurants-near-me" className="nearByLink">
                Biryani food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/burger-restaurants-near-me" className="nearByLink">
                Burger food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/chinese-restaurants-near-me" className="nearByLink">
                Chinese food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link
                to="/continental-restaurants-near-me"
                className="nearByLink"
              >
                Continental food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/desserts-restaurants-near-me" className="nearByLink">
                Desserts food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/ice-cream-restaurants-near-me" className="nearByLink">
                Ice Cream food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/italian-restaurants-near-me" className="nearByLink">
                Italian food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/kebab-restaurants-near-me" className="nearByLink">
                Kebab food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/mithai-restaurants-near-me" className="nearByLink">
                Mithai food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/momos-restaurants-near-me" className="nearByLink">
                Momos food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/mughlai-restaurants-near-me" className="nearByLink">
                Mughlai food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link
                to="/north-indian-restaurants-near-me"
                className="nearByLink"
              >
                North Indian food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/pizza-restaurants-near-me" className="nearByLink">
                Pizza food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/rolls-restaurants-near-me" className="nearByLink">
                Rolls food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/sandwich-restaurants-near-me" className="nearByLink">
                Sandwich food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/" className="nearByLink">
                Shake food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link
                to="/south-indian-restaurants-near-me"
                className="nearByLink"
              >
                South Indian food near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link
                to="/street-food-restaurants-near-me"
                className="nearByLink"
              >
                Street food near me
              </Link>
            </div>
          </div>
          <div className="restaurant exlinks">
            <p className="nearMeHeading">Popular restaurant types near me</p>
            <div>
              <Link to="/bakeries-near-me" className="nearByLink">
                Bakeries near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/bars-near-me" className="nearByLink">
                Bars near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/beverage-shops-near-me" className="nearByLink">
                Beverage Shops near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/bhojanalya-near-me" className="nearByLink">
                Bhojanalya near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/cafes-near-me" className="nearByLink">
                Cafés near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/casual-dining-near-me" className="nearByLink">
                Casual Dining near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/clubs-near-me" className="nearByLink">
                Clubs near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/cocktail-bars-near-me" className="nearByLink">
                Cocktail Bars near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/confectioneries-near-me" className="nearByLink">
                Confectioneries near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/dessert-parlor-near-me" className="nearByLink">
                Dessert Parlors near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/dhabas-near-me" className="nearByLink">
                Dhabas near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/fine-dining-near-me" className="nearByLink">
                Fine Dining near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/food-courts-near-me" className="nearByLink">
                Food Courts near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/food-trucks-near-me" className="nearByLink">
                Food Trucks near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/irani-cafes-near-me" className="nearByLink">
                Irani Cafes near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/kiosks-near-me" className="nearByLink">
                Kiosks near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/lounges-near-me" className="nearByLink">
                Lounges near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/meat-shops-near-me" className="nearByLink">
                Meat Shops near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/" className="nearByLink">
                {" "}
                near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/microbreweries-near-me" className="nearByLink">
                Microbreweries near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/paan-shop-near-me" className="nearByLink">
                Paan Shop near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/pop-ups-near-me" className="nearByLink">
                Pop Ups near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/pubs-near-me" className="nearByLink">
                Pubs near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/quick-bites-near-me" className="nearByLink">
                Quick Bites near me
              </Link>
              <span className="nearByLinkSpan"></span>
              <Link to="/sweet-shops-near-me" className="nearByLink">
                Sweet Shops near me
              </Link>
            </div>
          </div>
          <div className="restaurant chains exlinks">
            <p className="nearMeHeading">Top Restaurant Chains</p>
            <div className="restaurantAndCities">
              <Link to="/ncr/restaurants/bikanervala">Bikanervala</Link>
              <Link to="/ncr/restaurants/biryani-blues">Biryani Blues</Link>
              <Link to="/ncr/restaurants/btw">BTW</Link>
              <Link to="/ncr/restaurants/burger-king">Burger King</Link>
              <Link to="/ncr/restaurants/burger-singh-big-punjabi-burgers">
                Burger Singh
              </Link>
              <Link to="/ncr/restaurants/dominos">Domino's</Link>
              <Link to="/ncr/restaurants/dunkin-donuts">Dunkin' Donuts</Link>
              <Link to="/ncr/restaurants/faasos-1">Faasos</Link>
              <Link to="/ncr/restaurants/haldirams">Haldiram's</Link>
              <Link to="/ncr/restaurants/kfc">KFC</Link>
              <Link to="/ncr/restaurants/krispy-kreme">Krispy Kreme</Link>
              <Link to="/ncr/restaurants/mcdonalds">McDonald's</Link>
              <Link to="/ncr/restaurants/moti-mahal-delux-1">
                Moti Mahal Delux
              </Link>
              <Link to="/ncr/restaurants/om-sweets-snacks">
                Om Sweets &amp; Snacks
              </Link>
              <Link to="/ncr/restaurants/paradise-biryani">
                Paradise Biryani
              </Link>
              <Link to="/ncr/restaurants/pizza-hut">Pizza Hut</Link>
              <Link to="/ncr/restaurants/sagar-ratna">Sagar Ratna</Link>
              <Link to="/ncr/restaurants/subway-1">Subway</Link>
              <Link to="/ncr/restaurants/wow-momo">WOW! Momo</Link>
            </div>
          </div>
          <div className="cities exlinks">
            <p className="nearMeHeading">Cities We Deliver To</p>
            <div className="restaurantAndCities">
              <Link to="/ncr/">Delhi NCR</Link>
              <Link to="/kolkata/">Kolkata</Link>
              <Link to="/mumbai/">Mumbai</Link>
              <Link to="/bangalore/">Bengaluru</Link>
              <Link to="/pune/">Pune</Link>
              <Link to="/hyderabad/">Hyderabad</Link>
              <Link to="/chennai/">Chennai</Link>
              <Link to="/lucknow/">Lucknow</Link>
              <Link to="/kochi/">Kochi</Link>
              <Link to="/jaipur/">Jaipur</Link>
              <Link to="/ahmedabad/">Ahmedabad</Link>
              <Link to="/chandigarh/">Chandigarh</Link>
              <Link to="/goa/">Goa</Link>
              <Link to="/indore/">Indore</Link>
              <Link to="/nashik/">Nashik</Link>
              <Link to="/ooty/">Ooty</Link>
              <Link to="/shimla/">Shimla</Link>
              <Link to="/ludhiana/">Ludhiana</Link>
              <Link to="/guwahati/">Guwahati</Link>
              <Link to="/amritsar/">Amritsar</Link>
              <Link to="/kanpur/">Kanpur</Link>
              <Link to="/allahabad/">Allahabad</Link>
              <Link to="/aurangabad/">Aurangabad</Link>
              <Link to="/bhopal/">Bhopal</Link>
              <Link to="/ranchi/">Ranchi</Link>
              <Link to="/visakhapatnam/">Visakhapatnam</Link>
              <Link to="/bhubaneswar/">Bhubaneswar</Link>
              <Link to="/coimbatore/">Coimbatore</Link>
              <Link to="/mangalore/">Mangalore</Link>
              <Link to="/vadodara/">Vadodara</Link>
              <Link to="/nagpur/">Nagpur</Link>
              <Link to="/agra/">Agra</Link>
              <Link to="/dehradun/">Dehradun</Link>
              <Link to="/mysore/">Mysore</Link>
              <Link to="/puducherry/">Puducherry</Link>
              <Link to="/surat/">Surat</Link>
              <Link to="/varanasi/">Varanasi</Link>
              <Link to="/patna/">Patna</Link>
              <Link to="/udaipur/">Udaipur</Link>
              <Link to="/cuttack/">Cuttack</Link>
              <Link to="/trivandrum/">Trivandrum</Link>
              <Link to="/haridwar/">Haridwar</Link>
              <Link to="/leh/">Leh</Link>
              <Link to="/pushkar/">Pushkar</Link>
              <Link to="/rajkot/">Rajkot</Link>
              <Link to="/madurai/">Madurai</Link>
              <Link to="/kozhikode/">Kozhikode</Link>
              <Link to="/alappuzha/">Alappuzha</Link>
              <Link to="/thrissur/">Thrissur</Link>
              <Link to="/manipal/">Manipal</Link>
              <Link to="/vijayawada/">Vijayawada</Link>
              <Link to="/jodhpur/">Jodhpur</Link>
              <Link to="/kota/">Kota</Link>
              <Link to="/ajmer/">Ajmer</Link>
              <Link to="/mussoorie/">Mussoorie</Link>
              <Link to="/rishikesh/">Rishikesh</Link>
              <Link to="/jalandhar/">Jalandhar</Link>
              <Link to="/jammu/">Jammu</Link>
              <Link to="/manali/">Manali</Link>
              <Link to="/dharamshala/">Dharamshala</Link>
              <Link to="/raipur/">Raipur</Link>
              <Link to="/gorakhpur/">Gorakhpur</Link>
              <Link to="/palakkad/">Palakkad</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
