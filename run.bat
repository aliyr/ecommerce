@ECHO OFF
TITLE run
START npm config set "@fortawesome:registry" https://npm.fontawesome.com
START npm config set "//npm.fontawesome.com/:_authToken" ECAE9687-7696-4A48-BE16-164D46846814
START npm i
START ng build ecommerce-core
EXIT 0
