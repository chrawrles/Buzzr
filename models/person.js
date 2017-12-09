const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  partysize: { type: Number, required: true},
  personrequest: { type: String},
  checkinto: { type: String},
  personwait: { type: Number},
  id: { type: String},
  versionKey: false
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
