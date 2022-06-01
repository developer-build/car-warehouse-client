import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import img1 from "../../image/four question img/javascript-vs-nodejs.png";
import img2 from "../../image/four question img/nodejs & mongodb.png";
import img3 from "../../image/four question img/sql vs nosql.jpg";
import img4 from "../../image/four question img/JWT_tokens_EN.png";
import './Blog.css'

const Blog = () => {
  return (
    <Fragment>
  <section  className="bg-color">
  <section className="container-style justify-content-center align-items-center d-flex ">
        <Card className="pb-5 single-card-style bg-color mx-0  pt-5 ">
          <div className="row container details_style ">
            <div className="col-md-6">
              <Card.Img variant="top" src={img1} />
            </div>
            <div className="col-md-6 ">
              <Card.Body>
                <Card.Title>
                  <h6>1. Difference between javascript and nodejs </h6>
                </Card.Title>
                <small>
                  <strong>Javascript</strong> <br />
                  1. Javascript is a programming language that is used for
                  writing scripts on the website. 2. Javascript can only be run
                  in the browsers. 3. It is basically used on the client-side.
                  4. Javascript is capable enough to add HTML and play with the
                  DOM. 5. Javascript can run in any browser engine as like JS
                  core in safari and Spider monkey in Firefox. 6. It is the
                  upgraded version of ECMA script that uses Chrome’s V8 engine
                  written in C++. 7. Some of the javascript frameworks are
                  RamdaJS, TypedJS, etc.
                </small>
                <small>
                <strong>NodeJS</strong> <br />
                  1. NodeJS is a Javascript runtime environment. 2. We can run
                  Javascript outside the browser with the help of NodeJS. 3. It
                  is mostly used on the server-side. 4. Nodejs does not have
                  capability to add HTML tags. 5. V8 is the Javascript engine
                  inside of node.js that parses and runs Javascript. 6. Some of
                  the Nodejs modules are Lodash, express etc. These modules are
                  to be imported from npm. 7. Nodejs is written in C, C++ and
                  Javascript.
                </small>
              </Card.Body>
            </div>
          </div>
        </Card>
      </section>

      <section className="container-style justify-content-center align-items-center d-flex">
        <Card className="pb-5 single-card-style bg-color mx-0  pt-5 ">
          <div className="row container details_style ">
            <div className="col-md-6">
              <Card.Img variant="top" src={img2} />
            </div>
            <div className="col-md-6 ">
              <Card.Body>
                <Card.Title>
                  <h6>
                    2. When should you use nodejs and when should you use
                    mongodb
                  </h6>
                </Card.Title>
                <small>
                <strong>When i should use nodejs</strong> <br />
                  When i should use nodejs Node js is primarily used for
                  non-blocking, event-driven servers,data-intensive due to its
                  single-threaded nature. It's used for traditional web sites
                  and back-end API services. Node JS is best suited for
                  real-time collaborative drawing or editing applications.
                </small>
                <small>
                <strong>When i should use mongodb</strong> <br />
                  When i should use mongodb SQL. NoSQL databases like MongoDB
                  are a good choice when your data is document-centric and
                  doesn't fit well into the schema of a relational database,
                  when you need to accommodate massive scale, when you are
                  rapidly prototyping, and a few other use cases
                </small>
              </Card.Body>
            </div>
          </div>
        </Card>
      </section>

      <section className="container-style justify-content-center align-items-center d-flex">
        <Card className="pb-5 single-card-style bg-color mx-0  pt-5 ">
          <div className="row container details_style ">
            <div className="col-md-6">
              <Card.Img variant="top" src={img3} />
            </div>
            <div className="col-md-6 ">
              <Card.Body>
                <Card.Title>
                  <h6>3.Differences between sql and nosql databases</h6>
                </Card.Title>
                <small>
                <strong>SQL</strong> <br />
                  SQL 1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) 2. These
                  databases have fixed or static or predefined schema 3. These
                  databases are not suited for hierarchical data storage. 4.
                  These databases are best suited for complex queries 5.
                  Vertically Scalable 6. Follows ACID property
                </small>
                <small>
                <strong>NoSQL</strong> <br />
                  NoSQL 1. Non-relational or distributed database system. 2.
                  They have dynamic schema 3. These databases are best suited
                  for hierarchical data storage. 4. These databases are not so
                  good for complex queries 5. Horizontally scalable 6. Follows
                  CAP(consistency, availability, partition tolerance)
                </small>
              </Card.Body>
            </div>
          </div>
        </Card>
      </section>

      <section className="container-style justify-content-center align-items-center d-flex">
        <Card className="pb-5 single-card-style bg-color mx-0  pt-5 ">
          <div className="row container details_style ">
            <div className="col-md-6">
              <Card.Img variant="top" src={img4} />
            </div>
            <div className="col-md-6 ">
              <Card.Body>
                <Card.Title>
                  <h6>4.What is the purpose of jwt and how does it work</h6>
                </Card.Title>
                <small>
                <strong>What is the purpose of jwt</strong> <br />
                  What is the purpose of jwt JWT, or JSON Web Token, is an open
                  standard used to share security information between two
                  parties — a client and a server. Each JWT contains encoded
                  JSON objects, including a set of claims. JWTs are signed using
                  a cryptographic algorithm to ensure that the claims cannot be
                  altered after the token is issued
                </small>
                <small>
                <strong>How does it work</strong> <br />
                  how does it work 1.Users will start by authenticating with a
                  username and password managed by Auth0. 2.Once authenticated,
                  the client will receive a JWT representing an access token.
                  3.The client will include the access token in the
                  authorization header of every request to a secure endpoint.
                  4.The server will validate the access token and determine if
                  it has the right permissions, using the information within the
                  token.
                </small>
              </Card.Body>
            </div>
          </div>
        </Card>
      </section>
  </section>
    </Fragment>
  );
};

export default Blog;
