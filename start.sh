#!/bin/bash

rm .env
# Get the value of the USER environment variable
SERVER_URL="$SERVER_URL"

# Define the output file name
output_file=".env"

# Create or overwrite the .env file
echo "REACT_APP_API_URL=$SERVER_URL" >> "$output_file"


# Print a message to confirm the creation of the .env file
echo "Created $output_file with variable=$SERVER_URL"

npm start


