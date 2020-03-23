var express = require('express');
var router = express.Router();
const fs = require('fs');


const Keys = require("../models/Keys")
const Tokens = require("../models/Tokens")

/* GET home page. */
router.get('/:token', function (req, res, next) {
  let token = req.params.token;
  // let key = "";
  // let keys = [];


  // function keyOlustur() {
  //   key = "";
  //   for (var i = 0; i < 12; ++i) {
  //     key += Math.round(Math.random() * 9);
  //   }
  //   return key;
  // }

  // for (var i = 0; i < 200; ++i) {
  //   let key2 = keyOlustur();
  //   let newKeys = new Keys({
  //     key: key2,
  //   })

  //   newKeys.save((err, data) => {
  //     if (!err) {
  //       fs.appendFile("test.txt", `"${key2}",`, function (err) {

  //       });
  //     }
  //   });
  // }

  console.log(keys);
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
            status: 1
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