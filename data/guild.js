schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: "r"}, 
 module.exports = mongoose.model("Guild", schema)
