var express = require('express');
var router = express.Router();

const Keys = require("../models/Keys")
const Tokens = require("../models/Tokens")

/* GET home page. */
router.get('/:token', function (req, res, next) {
  let token= req.params.token;

  if (token.length == 32) {
    Tokens.findOne({
      token
    }, (err, data) => {
      if (!err) {
        console.log(data);
        if ((data == null)) {
          Keys.findOneAndUpdate({
            status: 0
          }, {
            status: 0
          }, (err2, data2) => {
            if (!err2) {
              if (data2 != null) {
                res.render("index2", {
                  title: data2.key,
                });
                const newToken = new Tokens({
                  token
                })
                newToken.save((err3, data3) => {
                  if (!err3)
                    console.log("kaydettim");
                });
              } else {
                res.render("index", {
                  title: "Oops! Size verebilecek hiç keyim kalmadı:("
                });
              }
            }
          })
        } else {
          res.render("index", {
            title: "Daha önce kullanılmış bir token. Lütfen hesabınızdan çıkış yapıp tekrar onaylayın."
          });
        }
      }
    })
  } else {
    res.render("index", {
      title: "Geçersiz token key"
    });
  }
});

module.exports = router;
