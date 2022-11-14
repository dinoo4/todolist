# TPA 5 (Web Service & RESTful API)

Dokumentasi web service dan RESTful API yang dibuat.

#### Endpoint RESTful API

endpoint RESTful API dan contohnya

### Register user

---

Pada postman atur methode menjadi POST.

Example

```
endpoint http://localhost:3000/user/register
```

```
{
  "name": "Dino",
  "email": "dino@gmail.com",
  "password": "123",
  "phoneNumber": "0899876521"
}
```

### Login user

---

Pada postman atur methode menjadi POST.

Example

```
endpoint http://localhost:3000/user/login
```

```
{
  "email": "dino@gmail.com",
  "password": "123"
}
```

### Create To Do List

---

Pada postman atur methode menjadi POST.

Example

```
endpoint http://localhost:3000/toDoList/createToDo
```

```
{
  "activity": "Belajar express",
  "description": "mendalami tentang express js",
  "user": "6371039d2fd28d9078a22b1c"
}
kolom user yaitu id user
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY4NDA3MDU2fQ.ZRmV9BgROeI3TcpdHKN4GcLi3-116eoh5FMDGLki2io
```

### Get All To Do List

---

Pada postman atur methode menjadi GET.

Example

```
endpoint http://localhost:3000/toDoList/getAllToDo
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY4NDA3MDU2fQ.ZRmV9BgROeI3TcpdHKN4GcLi3-116eoh5FMDGLki2io
```

### Get To Do List By Id

---

Pada postman atur methode menjadi GET.

Example

```
endpoint http://localhost:3000/toDoList/getToDoById/id
```

Masukkan Authorization (Bearer Token) hasil dari login.

```html
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY4NDA3MDU2fQ.ZRmV9BgROeI3TcpdHKN4GcLi3-116eoh5FMDGLki2io
```

Masukan id user pada path variable di postman

### Update To Do List By Id

---

Pada postman atur methode menjadi PUT.

Example

```
endpoint http://localhost:3000/toDoList/updateToDoById/id
```

```
{
  "activity": "bermain",
  "description": "belajarr",
  "user": "6371039d2fd28d9078a22b1c"
}
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY4NDA3MDU2fQ.ZRmV9BgROeI3TcpdHKN4GcLi3-116eoh5FMDGLki2io
```

Masukan id user pada path variable di postman

### Delete To Do List By Id

---

Pada postman atur methode menjadi DELETE.

Example

```
endpoint http://localhost:3000/toDoList/deleteToDoById/id
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY4NDA3MDU2fQ.ZRmV9BgROeI3TcpdHKN4GcLi3-116eoh5FMDGLki2io
```

Masukan id user pada path variable di postman

### Delete All To Do List

---

Pada postman atur methode menjadi DELETE.

Example

```
endpoint http://localhost:3000/toDoList/deleteAllToDo
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY4NDA3MDU2fQ.ZRmV9BgROeI3TcpdHKN4GcLi3-116eoh5FMDGLki2io
```
