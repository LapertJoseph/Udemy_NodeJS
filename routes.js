const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    // event listener de data (NODEJS)
    req.on("data", (chunk) => {
      console.log(chunk);
      // Push chunk of code parser in the array
      body.push(chunk);
    });
    return req.on("end", () => {
      // create a buffer to store in 'parseBody' and concat and readable. (possible seulement si le chunk est du texte)
      const parseBody = Buffer.concat(body).toString();
      // parse the body and split to take only the value
      const message = parseBody.split("=")[1];
      //write the content in our file created
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.JS Server !</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;  // export de notre fonction qui contiennenent les routes 