import postUser from "../schema/user.schema.js";


export const addUser =  (request, response) => {
    const user = request.body;
    
    const newUser = new postUser(user);
    newUser.save().then((res) =>{
         response.sendStatus(201);
     })
}
