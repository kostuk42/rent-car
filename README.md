# Rent-car

Car rental service is a project created according to the following requirements:

# Requirements:

Create an application for a company that provides car rental services in Ukraine. The application consists of 3 pages:

home page with a general description of the services provided by the company. Stylization and design at your discretion.
a page containing a catalog of cars of various configurations, which the user can filter by brand, price per hour of car
rental and the number of kilometers covered by the car during its operation (mileage). a page with ads that have been
added by the user to favorites. The appearance of the program should consist of a navigation (design at your discretion)
and a viewing area.

# Technical requirements:

According to the layout, implement a car rental announcement card. 12 ads should be rendered on the first page of the
catalog, and the rest of them - after clicking on the Load more button. If you click on the "heart" button on the ad
card, it should be added to the list of favorites, and the color of the button should change. When updating the page,
the final result of the user's actions should be recorded. That is, if you add an ad to your favorites and refresh the
page, the button still remains in the "favorite ad" state with the appropriate color. If you click the heart button
again, the ad should be removed from the list of favorites, and the color of the button should change to its original
state. If you click on the Learn more button, a modal window should open with detailed information about the car and its
rental conditions. The modal window should be closed by clicking on the button in the form of a "cross", by clicking on
the backdrop or pressing the Esc key. In the code, the mileage of the car must be written with one value (for example,
4500). In the UI - displayed with a comma (4,500). The Rental car button should be implemented as a link that will allow
the user to connect with the company by phone number +380730000000. Add filtering. dropdown with car brands makes.json -
show ads with cars of the corresponding brand. Create routing using React Router. The application should have the
following routes: "/" - home page with a general description of the services provided by the company "/catalog" - a page
containing a catalog of cars of various configurations "/favorites" - a page with ads that have been added to favorites
by the user If the user entered using a route that does not exist, he must be redirected to the home page.

To work with a list of ads, create your own personal backend for development using the UI service https://mockapi.io/.
Create an adverts resource. Use the resource constructor and describe the ad object as described below.

Advert:

Create an advert in Mockapi with the following fields: id, year, make, model, type, img, description, fuelConsumption,
engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage (see screenshot
below). It is forbidden to add new fields!

The database should contain at least 32 ads with different meanings (at your discretion). Implemented pagination, where
one pagination page should accommodate 8 ads. Pagination should be implemented on the Mockapi side.

Used technologies:
- JavaScript
- React
- Redux
- RTK Query
- Material UI
- Emotion Styled Components

![proto 1](rent-car/src/assets/images/img.png)

![proto 2](rent-car/src/assets/images/img_1.png)


