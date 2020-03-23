# Profital

## Overview

Profital is a stock research application. Users can create a watchlist with ticker symbols they would like
to keep an eye on, search for details on any ticker in the market, and check for upcoming earnings for companies
that report today.

## Technologies Used

1. Ruby and Rails - for the backend api
2. React - for the frontend UI
3. Redux - for frontend state management

## Installing

### Rails backend

1. Clone project repo and cd into the `profital-api` folder
2. Run `bundle install`
3. Run `rails db:migrate`
4. Run `rails db:seed` to use seed data. If you don't want to use seed data, skip this step
5. Run `rails s` to start dev server

### React and Redux frontend

1. cd into `profital-react` folder
2. Run `npm install`
3. Run `npm start` to start development server

## Notes

1. All market data is provided by IEX Cloud
