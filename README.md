# Setup
1. Open two terminals, one in the server folder, and one in the client folder.
2. `npm install` in both terminals.
3. Create a PostgreSQL database using the queries found in server/database.txt.

# Usage
1. `nodemon index` in server terminal.
2. `npm start` in the client terminal.

# Database Commands
1. Login to database: `psql -U postgres`
2. List all the databases: `\l`
3. Select a database: `\c thode`
4. List all the tables in a selected database: `\dt`
5. List all the entries in a table: `SELECT * FROM tableName;`
6. Create table: `CREATE TABLE monday(workstation_id SERIAL PRIMARY KEY, host_name VARCHAR(30), time VARCHAR(30), student_name VARCHAR(2555), status VARCHAR(30));`
7. Insert entry into table: `INSERT INTO monday(host_name, time, student_name, status) VALUES('THODEF1D001', '9', 'Milly', 'Occupied');`
8. Update entries from table: `UPDATE wednesday SET student_name='', status='Available' where host_name='THODEF1D001';`
9. Delete entries from table: `DELETE FROM thode WHERE student_name='';`
10. Delete table: `DROP TABLE monday;`

# How to create a copy of the database correctly
1. Login to your postgres account through the terminal using the `psql -U postgres`
2. Go to the db.js file, and change the information to match your account, and the name of your database. Keep the same name of the database "lms", short for library management system. Change the username and password in this file to match your postgres acc.
3. Create a database using command: `CREATE DATABASE lms;`
4. Connect to that database using command: `\c lms`
5. Open up the "create_exact_copy_of_database.txt" file, and run all those commands in the terminal. This should make 3 tables and populate them with the sample data I provided. Note that you can just copy and paste it all and all the commands will be run sequentially to create an exact copy of the database. You should have 3 tables called library, usr, and workstation. Check their contents using the database commands I listed above.
6. We're done! Now start up the client and server, as per the instructions in the "Usage" section above, and it should work.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
