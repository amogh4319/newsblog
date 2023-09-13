const {username,password}=process.env;
export const connectionStr=`mongodb+srv://${username}:${password}@cluster0.jxilbpx.mongodb.net/meetup?retryWrites=true&w=majority`;