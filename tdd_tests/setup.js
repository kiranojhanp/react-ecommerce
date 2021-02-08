import { connect, disconnect } from "mongoose";

beforeAll((done) => {
  connect(process.env.MONGO_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then((db) => {
      console.log("Connected ...");
      done();
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});

afterAll((done) => {
  disconnect().then(() => {
    console.log("Disconnecting ...");
    done();
  });
});
