# REST API for crud operations in Nodejs
1. Create a database (use sqlite3 database if using Python or any local DB) containing
two tables Books and Authors. Add appropriate columns to the tables. Every book
has a single author and referential integrity should be maintained
2. Create a Rest API which supports the following operations:
    Insert, update and select on Books
3. Handle exception for adding Authors who are not present in the table.

<br>


# Setup and Installation



- Clone Repositry
    <pre><code> git clone https://github.com/dishvyas/RestApi-in-Nodejs</pre></code>

 

- Install package dependancies for Nodejs 
    <pre><code>npm install </pre></code> 

 
- Run Server (Node)
    <pre><code>npm start </code></pre>
<br>
# API endpoints 

- Books (Title, subtitle, Author)
    <pre> POST /api/book (create) <pre>
    <pre>  /api/books/:id (read, update, delete) <pre>

- Author (Name, Bio, Books)
    <pre> POST /api/author (create) <pre>
    <pre>  /api/authors/:id (read, update, delete) <pre>
