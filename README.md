# Project 4 Multi-Unit Residential Recycling Application (MURR2)

This was a large-scale project that took up 2 project classes for two-semester. This Project focused on developing a functional application using
Symfony 4 (with API Platform - Restful API) as the backend and Vue.js and BootstrapVue as the frontend. This focus was based on creating a real-world development with a client and project team.

# Pieces I Contributed To

Backend (Symfony 4 and API Platform)
  Entities (all entities include validation through annotations: 
    - Point Entity: features many-to-many table to the Resident entity.
    - PickUp Entity: features one-to-many table to the Resident entity.
    - Site Entity: Features properties used for search filtering, ordering, and pagination.
    - Pickup Controller: custom controller used to make POST call to the database with custom validation for error messages and error response codes.
   Tests:
    - Point Test: Are a series of tests used to test scenarios when points are or are not added to a resident and saved to the database.
    - PickUpSiteTest: Are a series of tests used to test scenarios when pickup transactions are or are not added to the database.
    - SiteTest: Are a series of tests used to test scenarios when site properties like pagination, partial filtering, order filtering and 
    - whether a site exists or not.

Frontend (Vue.js and BootStrapVue)
  - CreateLogin features:
    - Custom validation for all inputs boxes.
    - redirect to Points view unpon successful entry.
    - axios(HTTP) POST call to the API.

![Create Login View](images/CreateLogin.JPG)

![Create Login with Errors](images/CreateLoginError.JPG)

  - DriverCollection features:
    -  dynamic site list, that pulls items from the database using a promise object.
    -  Search feature that needs partial filter.
    -  dynamic pagination that adjusts to hydra: members being sent back.
    -  object are ordered through API.
    -  Pickup action button to redirect to the collection form.
    -  custom validation for an empty list and empty-filtered list(if a site does not exist).

![DriverCollection View](images/DriverCollection.JPG)

![DriverCollection with Error](images/CollectionError.JPG)

  - DriverPickUp features:
    - custom numeric entry 
    - custom validation 
    - redirect to add site points modal
  
![DriverPickUP View](images/DriverPickUp.JPG)
  
![DriverPickup with Error](images/PickupError.JPG)
  



# Other Design Documents I Liked For This Project

Sequence Diagrams

![DriverCollection Sequence Diagram](images/SequenceDia.JPG)

![DriverPickUp Sequence Diagram](images/SeqDia.JPG)

Mock-ups

![DriverPickup GUI Mock-up](images/MockGUI.JPG)

![CreateLogin GUI Mock-up with Validation](images/ValidMockCL.JPG)

# Notes: Use on Programs
# cweb-vuejs

## Project setup - in terminal navigate to \murr-ui\
```
npm install
```

### Compiles and hot-reloads for development  - in terminal navigate to \murr-ui\
```
npm run serve
```

### Compiles and minifies for production  - in terminal navigate to \murr-ui\
```
npm run build
```

### Lints and fixes files - in terminal navigate to \murr-ui\
```
npm run lint
```

### PHP Webserver - in terminal, navigate to \murr-api\
```
php -S 127.0.0.1:8000 -t public
```

### PHP Composer Install - in terminal, navigate to \murr-api\
```
php commposer.phar install
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).