# INVENTORY TRACKING APP

## Description

An inventory tracking app. 


#### [Server-Side Repository](https://github.com/rita-morozova/inventory-tracking-backend)

#### [The demo can be viewed on Netlify](https://inventory-tracking-mm.netlify.app/) 

### Main Features:
* Users can see all products
* Users can see all suppliers
* Users can add products to the database
* Users can edit products
* Users can delete products
* Users can filter a list of products
* Users can export the list of products to CSV

## Getting Started
- Navigate to the [server-side-repo](https://github.com/rita-morozova/inventory-tracking-backend), fork and clone it.
- Navigate to `inventory-tracking-backend`
- Run `bundle install` to install all dependencies 
- Run `rails db:create` & `rails db:migrate` to create the database
- Run `rails db:seed` (to seed the database with the test data) 
- Start the server by running `rails s`
- Once the server is running, fork and clone this repo. From the main directory run `npm install` to install all dependencies
- Run `npm start` to start the application

## To Run Tests
- Run `rspec --format documentation`

### Build with
Ruby on Rails & React

### Tools
* PostgreSQL
* MDBootsrap

### A list of products

![List of products](https://res.cloudinary.com/diexi8g0j/image/upload/v1642108772/Screen_Shot_2022-01-13_at_1.19.25_PM_rqigwu.png)

### User can filter products

![Filter products](https://res.cloudinary.com/diexi8g0j/image/upload/v1642103350/Screen_Shot_2022-01-13_at_11.45.23_AM_j2py33.png)

### User can export data to CSV

![Export to CSV](https://res.cloudinary.com/diexi8g0j/image/upload/v1642103350/Screen_Shot_2022-01-13_at_11.47.22_AM_mpuukf.png)

### Add/Edit Product

![Add/Edit](https://res.cloudinary.com/diexi8g0j/image/upload/v1642103349/Screen_Shot_2022-01-13_at_11.45.41_AM_s5vh0u.png)

### User can see a list of suppliers

![Suppliers List](https://res.cloudinary.com/diexi8g0j/image/upload/v1642103349/Screen_Shot_2022-01-13_at_11.47.34_AM_uaquuw.png)

### Features to implement:
* Ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately
* Ability to create warehouses/locations and assign inventory to specific locations
* Add more tests

#### Created By _**Margarita Morozova**_
