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

![Create Login View](CreateLogin.JPG)

![Create Login with Errors](CreateLoginError.JPG)

  - DriverCollection features:
    -  dynamic site list, that pulls items from the database using a promise object.
    -  Search feature that needs partial filter.
    -  dynamic pagination that adjusts to hydra: members being sent back.
    -  object are ordered through API.
    -  Pickup action button to redirect to the collection form.
    -  custom validation for an empty list and empty-filtered list(if a site does not exist).

![DriverCollection View](DriverCollection.JPG)

![DriverCollection with Error](CollectionError.JPG)

  - DriverPickUp features:
    - custom numeric entry 
    - custom validation 
    - redirect to add site points modal
  
![DriverPickUP View](DriverPickUp.JPG)
  
![DriverPickup with Error](PickupError.JPG)
  



# Other Design Documents I Liked For This Project

Sequence Diagrams

![DriverCollection Sequence Diagram](SequenceDia.JPG)

![DriverPickUp Sequence Diagram](SeqDia.JPG)

Mock-ups

![DriverPickup GUI Mock-up](MockGUI.JPG)

![CreateLogin GUI Mock-up with Validation](ValidMock.JPG)
