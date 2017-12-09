import axios from "axios";

export default {
  // Gets all restaurants
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  // Gets the restaurant with the given id
  getRestaurant: function(id) {
    return axios.get("/api/restaurants?name=" + id);
  },
  loadRestaurant: function(id) {
    return axios.get("/api/restaurants/" + id);
  },
  // Deletes the restaurant with the given id
  deleteRestaurant: function(id) {
    return axios.delete("/api/restaurants/" + id);
  },
  // Saves a restaurant to the database
  saveRestaurant: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  },
  updateRestaurant: function(id, data) {
    return axios.put("/api/restaurants/" + id, data);
  },
  // Gets all restaurants
  getPersons: function() {
    return axios.get("/api/persons");
  },
  // Gets the restaurant with the given id
  getPerson: function(id) {
    return axios.get("/api/persons?id=" + id);
  },

  // Deletes the restaurant with the given id
  deletePerson: function(id) {
    return axios.delete("/api/persons/" + id);
  },
  // Saves a restaurant to the database
  savePerson: function(personData) {
    return axios.post("/api/persons", personData);
  },
  updatePerson: function(id, data) {
    return axios.put("/api/persons/" + id, data);
  }
};
