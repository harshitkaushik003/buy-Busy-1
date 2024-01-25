# Introduction
Buy Busy is an e-commerce app which has a collection of books that we can add to cart and order

# Authentication method
This app uses firebase authentication
Benefits of using it over manual authentication are:
1. The passwords are safe with firebase. The programmers or the manager of the database won't have acess to it which they would have in   case of manual authentication
2. Writing unnecessary code can be avoided. Firebase already has the functions required for authentication

# Structure of the app
App.js
    Authentication context
        Product Context
            all the routes 

# Starting the project
Run npm install or npm install --force to install all the dependencies as the zip file would contain 
public folder
src folder
package-lock.json
package.json
README.md

# Explaination of the project
1. Authentication is done under AuthenticationContext.js file that provides the values
    ->currentUser (user currently signed in)
    ->sign up, sign in, sign out functions

2.Product Context
    ->This context is created to handle all the functionalities related to cart and orders
    ->Consumes the value of currentUser to pass as argument to all the functions
    ->Functions
        ->adding to cart
        ->removing from cart
        ->ordering single item
        ->ordering all the items in the cart
    
3.Pages and Components
    ->Pages
        ->Home('/') is the page where all the items will be displayed
        ->SignIn('/sign-in') is the page where existing user can sign in
        ->SignUp('/sign-up') new user creation
        ->Profile: details of the current user. Will also have a sign out button
        ->Cart: Will contain the items in the cart
        ->Orders: Will display all the orders
    ->Components:
        ->Navbar: Will act as the parent to all routes, since it will be present on all urls
        ->Button: Component to be included at various places, to act as a button
        ->Card: For displaying all the items on the homepage. Will display add to cart button only if the user is logged in
        ->ListCard: For displaying all items on the cart page
        ->OrderCart: For displaying all the orders


