# Project 4 Multi-Unit Residential Recycling Application (MURR2)

The was a large scale project that took up 2 project classes for two semester. This Project focused on developing a functional application using
Symfony 4 (with API Platform - Restful API) as the backend and Vue.js and BootstrapVue as the frontend. This focus was based on creating 
on a real world developement with a client and project team

# Pieces I Contributed To

Backend (Symfony 4 and API Platform)
  Entities (all entities include validation through annotations: 
    - Point Enitiy: features many-to-many table to the Resident entity.
    - PickUp Entity: features one-to-many table to the Resident entity.
    - Site Entity: Features propeties used for search fitering, ordering, and pagination.
    - Pickup Controller: custom controller used to make POST call to the database with custom validation for error messages and error 
      response codes.
   Tests:
    - Point Test: Are a series of tests used to test scenarios when points are or are not added to a resident and saved to the database.
    - PickUpSiteTest: Are a series of tests used to test scenarios when pickup tranactions are or are not added to the database.
    - SiteTest: Are a series of tests used to test scenarios when site properties like pagination, partial filtering, order filtering and 
    - whether a site exists or not

Frontend (Vue.js and BootStrapVue)
  - CreateLogin
  - DriverPickUp
  - DriverCollection
