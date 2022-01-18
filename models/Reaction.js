const { Schema, model } = require('mongoose')

const Reaction = new Schema ({
  reactionId: {
    type: Schema.Types.ObjectId,
    deafult: new Types.ObjectId()
  }
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: 'user'
    required: true
  }
}, { timestamps: true })


module.exports = model('reaction', Reaction)