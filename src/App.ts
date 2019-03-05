import * as express from "express";
import bodyParser = require("body-parser");

class App {
  public app: express.Application;

  /**
   * @ class App
   * @ method bootstrap
   * @ static
   *
   */
  public static bootstrap (): App {
    return new App();
  }

  constructor () {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("Hello world");
    });

    // body parser sample
    this.app.post('/users', (req, res) => {
      const name = req.body.name || '';
      if (!name.length) {
        return res.status(400).json({error: 'Incorrenct name'});
      }

      res.send(res.json(name));
    });
  }
}

export default App;