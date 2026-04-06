## `SVELTEKIT-MONGODB-TEMP > START DATABASE`

We will store our users in a MongoDB database. We will use [MongoDB Altas](https://mongodb.com/atlas) which is their cloud-based solution.
  
Open your MongoDB dashboard and create a cluster (if you are unsure how that works, check out their tutorial). By clicking "Connect", you will get a URI of the form.
  
Save the URI as an environment variable `SECRET_MONGODB_URI` in the `.env` file (located at the root of the project).
Also generate a JWT Secret and save it as an environment variable `SECRET_JWT_KEY` in the `.env` file.
 
```
SECRET_MONGODB_URI="mongodb+srv://{USER_NAME}:{USER_PASSWORD}@{CLUSTER_NAME}.mongodb.net/data?retryWrites=true&w=majority"
SECRET_JWT_KEY="{YOUR_RANDOMLY_GENERATED_JWT_SECRET}"
```

NOTE: You can replace `SECRET_MONGODB_URI` with any connection string format. The password needs to be URL encoded if needed! Notice that I have added `data` before the question mark. This will be the name of the database under which the user collection will be created. Otherwise, MongoDB will call it test by default.