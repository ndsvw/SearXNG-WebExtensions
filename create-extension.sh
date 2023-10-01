#!/bin/bash

# Check if an instance name was provided as an argument
if [ $# -ne 1 ]; then
  echo "Usage: $0 <instance>"
  exit 1
fi

# Get the instance name from the command line argument
instance="$1"
instanceFolder="./output/$instance"

# Check if the instance folder already exists
if [ -d "$instanceFolder" ]; then
  # Create the instance folder if it doesn't exist
  rm -R "$instanceFolder"
  echo "Removed folder '$instanceFolder'."
fi

# Copy everything from the original directory to the instance folder
cp -r template "$instanceFolder"
echo "Copied everything to '$instance'."


find $instanceFolder -type f -exec sed -i "s/{{INSTANCE.DOMAINNAME}}/$instance/g" {} \;
echo "Replaced '{{INSTANCE.DOMAINNAME}}' with '$instance' in all files."

cd $instanceFolder
zip -r "../$instance.zip" *
echo "Zipped content of '$instanceFolder'."
cd ../..

rm -R "$instanceFolder"
echo "Removed '$instanceFolder'."