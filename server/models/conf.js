var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConfSchema = new Schema({
  name: { type: String, required: true },
  cfp: {
    from: { type: Date },
    to: { type: Date },
  },
  origin_link: { type: String },
});

ConfSchema.virtual("url").get(function() {
  return `conference/${this._id}`;
});

//Export model
module.exports = mongoose.model("Conf", ConfSchema);
