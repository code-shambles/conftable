const mongoose = require('mongoose');

const { Schema } = mongoose;

const SubmissionSchema = new Schema({
  rating: { type: Schema.Types.Float },
  state: {
    type: String,
    enum: ['submitted', 'accepted', 'rejected', 'waitlist'],
    default: 'submitted',
  },
  speakers: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  internal_notes: { type: String },
  origin_link: { type: String },
  updated_at: { type: Date },
  import: {
    title: { type: String, required: true },
    abstract: { type: String },
    description: { type: String },
    notes: { type: String },
    additional_info: { type: String },
    talk_format: { type: String },
    audience_level: { type: String },
    rating: { type: Schema.Types.Float },
    state: {
      type: String,
      enum: ['submitted', 'accepted', 'rejected', 'waitlist'],
      default: 'submitted',
    },
    speakers: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    created_at: { type: Date },
  },
});

SubmissionSchema.virtual('url').get(() => `speaker/${this._id}`);

module.exports = mongoose.model('Submission', SubmissionSchema);
