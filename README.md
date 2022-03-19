# React Website Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

This project should work as any react project generated using create-react-app. Common website features like navigation, authentication and database access are build in for easy development of a site of any kind. This template is very plain, having little to no theming, but the structure exists for very quick and easy customization of all elements in the site. For a pre-themed website consider my [Ionic Template](https://github.com/alexdhill/ionic_template) which is essentially the same website but developed using the Ionic Framework which provides a modern webapp design.

## Getting Started

Simply copy over the repository and begin adding to the site as necessary. Certain aspects of customization will be defined below. 

#### Note:
this website was designed to be used with firebase authentication, databases, and storage. I will include some functionality for Google API products like sheets, but to integrate with other services you will need to generate your own functions.

### Pages

To create new pages there are a few steps to follow that allow them to be added seamlessly.

#### First:
Create the Page.tsx in the pages folder and create a react functional component as is in all other pages in said folder.

#### Second:
Create the Page.css in the theming folder to store the css customization for a page specific elements. Global elements should be in the App.css file.

#### Third:
Add the page to the Router in the components folder and give it a unique path name.

#### Fourth (and finally):
Add the page to the nav bar in the header for users to access the page.