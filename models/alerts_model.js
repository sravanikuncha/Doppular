const mongoose=require('mongoose');

const alertSchema = new mongoose.Schema({
 
  sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"profiles"
  },
  receiver:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"profiles"
  },
  senderMsg:{
    type:{
        msg:String,
        profileId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"profiles"
        },
        username:String
    }
  },
  receiverMsg:{
    type:{
        msg:String,
        profileId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"profiles"
        },
        username:String
    }
  },
  postId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"posts"
  },
  commentId:{
    type:mongoose.Schema.Types.ObjectId,
      ref:"comments"
  },
  createdAt:{ 
    type: Date, 
    default: Date.now
 }
});

 const alertModel = mongoose.model("alerts", alertSchema);

module.exports=alertModel;