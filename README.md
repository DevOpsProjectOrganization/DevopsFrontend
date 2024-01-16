A simlpe frontend using Angular to display data fetched from two microservices: one for ads and one for products. It is dockerized and includes a workflow pipeline, which checks the code according to an eslint configuration, runs the test files and checks if they all succeed, checks for vulnerabilities with Snyk and Sonarcloud, and finally - pushes the docker image to the Docker Hub.

A future optimization would be to use the docker image only for building the project, and then using an nginx image to serve the files, because currently the image is very big because of all the node files and other unnecessary dependencies. I tried configuring nginx, but I was faced with a problem I couldn't overcome, so it remained like this  currently.

The repo also contains a manifest file which should be used for Kubernetes configuration.
