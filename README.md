# Catch of the day ⚓️

See living demo at [https://munfish-react.herokuapp.com](https://munfish-react.herokuapp.com/)

- This repo was based on Web Bos's course - [ReactForBeginner](https://reactforbeginners.com/)
- Only for learning purposes 🙏🏻! 

## Useful notes

- Run ` git config core.autocrlf true` to disable message **warning: LF will be replaced by CRLF** in Windows.
- Deploy CRA app to Heroku - simplest way based on [Buildpack](https://github.com/mars/create-react-app-buildpack)
```
heroku login
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```