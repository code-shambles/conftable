var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SpeakerSchema = new Schema({
  name: { type: String },
  email: { type: String },
  location: { type: String },
  twitter: { type: String },
  url: { type: String },
  organization: { type: String },
  internal_notes: { type: String },
  updated_at: { type: Date },
  import: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    bio: { type: String },
    twitter: { type: String },
    url: { type: String },
    organization: { type: String },
    updated_at: { type: Date },
  },
});

SubmissionSchema.virtual("url").get(function() {
  return `speaker/${this._id}`;
});

module.exports = mongoose.model("Speaker", SpeakerSchema);
