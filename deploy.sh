# Use this command to build a new image
docker build --rm -t image_name:tag .

# Use this command to run your image (for port forwarding you need to specify node_service_port:OS_port)
docker run -p 8080:5000 image_name:tag

# Use this command to push your image to remote registry(Docker Hub for instance)
docker push image_name:tag