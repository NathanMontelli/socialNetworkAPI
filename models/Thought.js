const { Schema, model } = require('mongoose')

const Thought = new Schema({
  thoughtText: {
    type: String,
    require: true,
    maxlength: 280
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,

  // }
  username: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  reactions: [{
    type: Schema.Types.ObjectId,
    ref: 'reaction'
  }]
}, { timestamps: true },
{ toJSON: { virtuals: true }, id: false })

Thought.virtual('reactionCount').get(function () {
  return this.reactions.length
})

module.exports = model('thought,', Thought)