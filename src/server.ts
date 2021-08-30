import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

( async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Implement a RESTful endpoint
  app.get( "/filteredimage/", async ( req: Request, res: Response ) => {
    let { image_url } = req.query;
    if ( !image_url ) {
      return res.status(400).send(`image_url is required`);
    }
    const filtered_image_path = await filterImageFromURL(image_url)
    const filtered_image_paths: Array<string> = [filtered_image_path]
    return res.status(200).sendFile(filtered_image_path, async () => await deleteLocalFiles(filtered_image_paths));
  } );

  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
} )();
