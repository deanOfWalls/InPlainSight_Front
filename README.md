# CRUD_demo Technical Design Document

## Introduction

`CRUD_demo` is a web application designed to demonstrate basic CRUD functionality. It allows users to read all entries,
create new entries, edit, and delete entries in an H2 database. The application is built using Java, Spring Boot,
jQuery, and H2. The Model-View-Controller (MVC) architectural pattern is used to separate concerns and
improve maintainability.

Please view the [Javadocs](https://deanofwalls.github.io/CRUD_demo/javadocs/index.html) for this project to get better
acquainted with the object orientation.

## System Architecture

The `CRUD_demo` system follows a client-server architecture. The client-side of the application is built using jQuery,
which handles the user interface and interaction. The server-side is implemented using Java and Spring
Boot, providing the business logic and data persistence layer. An H2 in-memory database is used for data storage and
retrieval.

## Database Design

The H2 database consists of a single table representing individuals' basic details. The table schema is defined
as follows:

```
CREATE TABLE individuals (
ID INT PRIMARY KEY AUTO_INCREMENT,
firstName VARCHAR(255),
lastName VARCHAR(255),
birthDate DATE
);
```

## System Components

### Client-Side Components

The client-side of the application is implemented using jQuery and Thymeleaf. It includes the following components:

- **Entry Form**: Allows users to enter and submit new data.
- **Entry List**: Displays a list of all entries stored in the database. Users can view, edit, and delete entries from
  this list.

### Server-Side Components

The server-side of the application is implemented using Java and Spring Boot. It includes the following components:

- **Controller**: Handles HTTP requests and performs appropriate actions, such as retrieving entries, creating new
  entries, updating existing ones, and deleting entries.
- **Service**: Implements the business logic of the application. It interacts with the database through the repository
  layer to perform CRUD operations on entries.
- **Repository**: Provides an interface to interact with the H2 database. It includes methods for querying and modifying
  entry data.

## Data Persistence

The application uses an H2 in-memory database for data persistence. Spring Data JPA is used to interact with the
database. The repository layer provides an abstraction over the database operations, allowing the service layer to
perform CRUD operations on entries.

## User Interface Flow

1. The user accesses the `CRUD_demo` web application through a web browser.
2. The application presents the user with a list of entries stored in the database.
3. The user can add a new entry by filling out the Entry Form and submitting it.
4. Upon submission, the application saves the new entry to the database.
5. The user can edit an existing entry by clicking the edit button next to the respective entry in the Entry List.
6. After making the desired edits, the user can save the changes, and the application updates the corresponding entry in
   the database.
7. The user can delete an entry by clicking the delete button next to the respective entry in the Entry List.

## Containerization and Deployment

The application is containerized using Docker. This ensures a consistent environment for both development and
production. Moreover, the application is deployed to the cloud using Render.com. To ensure that the application remains
active and is not spun down due to inactivity, a bash curl script is included in the Dockerfile that pings the
application periodically.

## Conclusion

The `CRUD_demo` web application is a simple and straightforward demonstration of CRUD operations using Java, Spring
Boot, jQuery, and H2. It provides an easy-to-understand introduction to building and deploying CRUD
applications. Its containerized nature ensures consistent behavior across different environments, while its deployment
on Render.com makes it easily accessible to users worldwide.
