<br />

<p align="center">
  <a href="https://persona-sand.vercel.app/">
    <img src="https://www.freelogodesign.org/file/app/client/thumb/0f80c559-bf1a-4b2c-8515-97921e829e46_200x200.png?1595278414628" alt="Persona Logo">
  </a>

  <h3 align="center">Fast and efficient Image uploader made while keeping minimalism in mind.</h3>

# Persona — Image Uploader

## ✨ Features

- Drag and drop or click to upload image
- Supports multiple types: _jpeg, png, gif_
- Upload instantly, no need to create an account

## 🚀 Quick start

Start developing loally

### Clone the repo

```bash
https://github.com/heytulsiprasad/persona.git
```

### Install Dependencies

_The project only needs `client` folder as of now, so you don't need server dependencies yet._
**Everything outside the `client` folder is just boilerplate.**

```bash
cd client
npm install
npm run start
```

You can run `npm run dev` after the first time (as we need to create the `tailwind.generated.css` file on first run)

### Setup env

_We are using `.env` file inside our react project, so for it to detect we need to append our key name with `REACT_APP`._

- Create a file named `.env` in client folder
- Register your application on [Imgur](https://api.imgur.com/oauth2/addclient)
  - Select **Anonymous usage without user authentication** under **Authorization Type**
  - Fill other basic details as asked and hit submit
- Copy your `Client ID`
- Paste it inplace of value
  - `REACT_APP_IMGUR_CLIENT_ID=value`

## Upcoming Features

- User authentication so that user can upload images to their Imgur Account
- Creating dashboard for user to see all previously uploaded images
- [May or may not] Small video upload

---

</br>
<a href="https://twitter.com/heytulsiprasad"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/heytulsiprasad?style=social"/></a>
Made with :heart: and Javascript
