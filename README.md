# Image Filtering Microservice on AWS

This image filter app is a simple cloud application that allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is a Node-Express application which runs a simple script to process images. 
And the endpoint URL for the running Elastic Beanstalk Deployment is: [EB_URL](http://image-filtering-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?)

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Deploying your system

Use the commands `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## Hints for improving the project

### Refactor the RESTapi

If you're feeling up to it, refactor the RESTapi to make a request to your newly provisioned image server.

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)
> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.
