const express = require( 'express' );
const { UserController } = require( './controllers' );

const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use( express.json() );

app.post( '/user', UserController.createUser );

app.get( '/user/:id', UserController.getUser);

app.patch( '/user/:id', UserController.updateUser);

app.delete( '/user/:id', UserController.deleteUser);

app.post( '/task', UserController.createUser );

app.get( '/task/:id', UserController.getUser);

app.patch( '/task/:id', UserController.updateUser);

app.delete( '/task/:id', UserController.deleteUser);

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );
