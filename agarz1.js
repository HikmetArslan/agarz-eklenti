"use strict";
var CONNECTION_URL = "";
var point2 = function handleAddNodePosition(posx, posy) {
  this.x = posx;
  this.y = posy;
};
point2.prototype = {
  set: function handleAddNodePosition(posx, posy) {
    this.x = posx;
    this.y = posy;
  },
  setFrom: function clampObject(v) {
    this.x = v.x;
    this.y = v.y;
  },
  subtract: function subtract(other) {
    this.x -= other.x;
    this.y -= other.y;
  },
};
if (!Number.prototype.dotFormat) {
  Number.prototype.dotFormat = function () {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
}
var aaa = 0;
var spawnOnClick = false;
(function (wHandle, jQuery) {
  function isInt(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
  }
  function fn(index) {
    var i = 0;
    for (; i < res.length; i++) {
      if (res[i].pid == index) {
        return res[i];
      }
    }
    return null;
  }
  function update() {
    var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
    switch (lang) {
      case "tr":
        return "tr";
      case "en":
        return "en";
      case "es":
        return "es";
      case "de":
        return "de";
      default:
        return "tr";
    }
  }
  function waitUntilQuiet() {
    create(IteratorPrototype, methods);
  }
  function create(id, fn) {
    document.getElementById("canvas").style.cursor = "default";
    var i = 0;
    for (; i < result.length; i++) {
      if (result[i].userId != 0 && result[i].userId != undefined) {
        if (
          id >= result[i].name_x &&
          id <= result[i].name_x + result[i].name_w &&
          fn <= result[i].name_y &&
          fn >= result[i].name_y - result[i].name_h
        ) {
          document.getElementById("canvas").style.cursor = "pointer";
          break;
        }
      }
    }
  }
  function render(x, y) {
    if (x >= x1 && x <= x1 + width && y >= bottom && y <= bottom + i) {
      return jQuery("#overlays").fadeIn("fast"), true;
    } else {
      if (x >= cx && x <= cx + cw && y >= top && y <= top + h) {
        return reset(4), true;
      } else {
        if (x >= x2 && x <= x2 + radius && y >= cy && y <= cy + ch) {
          return reset(24), true;
        } else {
          if (
            x >= left &&
            x <= left + w &&
            y >= height &&
            y <= height + labelHeight
          ) {
            return reset(21), true;
          } else {
            if (x >= pos && x <= pos + elemWidth && y >= y1 && y <= y1 + dy) {
              return (projectResample = 1), reset(22), true;
            } else {
              if (
                x >= startX &&
                x <= startX + max_w &&
                y >= y2 &&
                y <= y2 + max_h
              ) {
                return reset(17), true;
              }
            }
          }
        }
      }
    }
    return false;
  }
  function getXYCoords(callback, clientX) {
    if (projectResample == 1) {
      projectResample = 0;
      reset(23);
    }
  }
  function init() {
    var objectImage = document.getElementById("idSohbetKapat");
    if (objectImage != null) {
      objectImage.onmousedown = function (event) {
        var value = document.getElementById("idHesapNo").value;
        if (isInt(value)) {
          var view = get(5);
          var i = 0;
          view.setUint8(i, 31);
          i++;
          view.setUint32(i, value);
          callback(view);
        }
      };
    }
    var scrollbar_handle = document.getElementById("idSohbetKapat2");
    if (scrollbar_handle != null) {
      scrollbar_handle.onmousedown = function (event) {
        var value = document.getElementById("idHesapNo").value;
        var y = document.getElementById("idGun").value;
        if (isInt(value) && isInt(y)) {
          var view = get(6);
          var i = 0;
          view.setUint8(i, 47);
          i++;
          view.setUint8(i, y);
          i = i + 1;
          view.setUint32(i, value);
          i = i + 4;
          callback(view);
        }
      };
    }
    document.getElementById("idSohbetAc").onmousedown = function (event) {
      var value = document.getElementById("idHesapNo").value;
      if (isInt(value)) {
        var view = get(5);
        var i = 0;
        view.setUint8(i, 32);
        i++;
        view.setUint32(i, value);
        callback(view);
      }
    };
    document.getElementById("idHesapsizSohbetKapat").onmousedown = function (
      event
    ) {
      reset(29);
    };
    document.getElementById("idHesapsizSohbetAc").onmousedown = function (
      event
    ) {
      reset(30);
    };
    var fbVSplitter = document.getElementById("idMesajGonder");
    if (fbVSplitter) {
      fbVSplitter.onmousedown = function (event) {
        reset(39);
        var valueLength = parseInt(
          document.getElementById("idMesajSure").value
        );
        var options = document.getElementById("idMesaj").value;
        if (options.length > 0) {
          var view = get(6 * options.length);
          var offset = 0;
          view.setUint8(offset, 33);
          offset++;
          view.setUint16(offset, valueLength);
          offset = offset + 2;
          view.setUint8(offset, options.length);
          offset++;
          var i = 0;
          for (; i < options.length; i++) {
            view.setUint16(offset, options.charCodeAt(i), true);
            offset = offset + 2;
          }
          callback(view);
        }
      };
    }
    var selectionCanvas = document.getElementById("idMesajSil");
    if (selectionCanvas) {
      selectionCanvas.onmousedown = function (event) {
        reset(39);
      };
    }
    document.getElementById("idLastWinnerGuncelle").onmousedown = function (
      event
    ) {
      var options = document.getElementById("idLastWinner").value;
      if (options.length > 0) {
        var view = get(4 * options.length);
        var offset = 0;
        view.setUint8(offset, 34);
        offset++;
        view.setUint8(offset, options.length);
        offset++;
        var i = 0;
        for (; i < options.length; i++) {
          view.setUint16(offset, options.charCodeAt(i), true);
          offset = offset + 2;
        }
        callback(view);
      }
    };
    if (localStorage.showSkin == null) {
      localStorage.showSkin = true;
    }
    enabled = localStorage.showSkin === "true";
    if (document.getElementById("noSkin")) {
      document.getElementById("noSkin").checked = !enabled;
    }
    if (localStorage.showName == null) {
      localStorage.showName = true;
    }
    showName = localStorage.showName === "true";
    if (document.getElementById("noNames")) {
      document.getElementById("noNames").checked = !showName;
    }
    if (localStorage.noColor == null) {
      localStorage.noColor = false;
    }
    showColor = localStorage.noColor === "true";
    if (document.getElementById("noColor")) {
      document.getElementById("noColor").checked = showColor;
    }
    if (localStorage.showDarkTheme == null) {
      localStorage.showDarkTheme = false;
    }
    showDarkTheme = localStorage.showDarkTheme === "true";
    if (document.getElementById("darkTheme")) {
      document.getElementById("darkTheme").checked = showDarkTheme;
    }
    if (localStorage.hideChat == null) {
      localStorage.hideChat = false;
    }
    newValue = localStorage.hideChat === "true";
    if (document.getElementById("hideChat")) {
      document.getElementById("hideChat").checked = newValue;
    }
    if (newValue) {
      jQuery("#chat_textbox").hide();
    } else {
      jQuery("#chat_textbox").show();
    }
    if (localStorage.smoothRender == null) {
      localStorage.smoothRender = 0.4;
    }
    val = localStorage.smoothRender;
    if (document.getElementById("smoothRender")) {
      document.getElementById("smoothRender").checked = val == 2;
    }
    if (localStorage.showFps == null) {
      localStorage.showFps = false;
    }
    visible = localStorage.showFps === "true";
    if (document.getElementById("showFps")) {
      document.getElementById("showFps").checked = visible;
    }
    if (localStorage.transparentRender == null) {
      localStorage.transparentRender = false;
    }
    lines = localStorage.transparentRender === "true";
    if (document.getElementById("transparentRender")) {
      document.getElementById("transparentRender").checked = lines;
    }
    if (localStorage.showScore == null) {
      localStorage.showScore = false;
    }
    isEnabled = localStorage.showScore === "true";
    if (document.getElementById("showScore")) {
      document.getElementById("showScore").checked = isEnabled;
    }
    if (localStorage.simpleGreen == null) {
      localStorage.simpleGreen = false;
    }
    state = localStorage.simpleGreen === "true";
    if (document.getElementById("simpleGreen")) {
      document.getElementById("simpleGreen").checked = state;
    }
    if (localStorage.macro == null) {
      localStorage.macro = false;
    }
    setting = localStorage.macro === "true";
    if (document.getElementById("idMakroCheckbox")) {
      document.getElementById("idMakroCheckbox").checked = setting;
    }
    var isTouchScreen = "ontouchstart" in document.documentElement;
    if (isTouchScreen == !![]) {
      if (localStorage.touchButtons == null) {
        localStorage.touchButtons = "true";
      }
    } else {
      localStorage.touchButtons = "false";
      jQuery("#labelTouchButtons").hide();
    }
    originalValue = localStorage.touchButtons === "true";
    if (document.getElementById("touchButtons")) {
      document.getElementById("touchButtons").checked = originalValue;
    }
    if (document.getElementById("idScopeAroundCheckbox")) {
      var isActive = localStorage.scopeAround === "true";
      document.getElementById("idScopeAroundCheckbox").checked = isActive;
    }
    document.getElementById("canvas").focus();
    var hasClasses = false;
    var command;
    mainCanvas = nCanvas = document.getElementById("canvas");
    ctx = mainCanvas.getContext("2d");
    mainCanvas.onmousemove = function (event) {
      input = event.clientX;
      y = event.clientY;
      moveTo();
      create(input, y);
    };
    mainCanvas.ondblclick = function (e) {
      var cursor_x = e.clientX;
      var cursor_y = e.clientY;
      var d = input - canvasWidth / 2;
      var v = y - canvasHeight / 2;
      console.log(d + " " + v);
      var view = get(17);
      view.setUint8(0, 48);
      view.setFloat64(1, d, true);
      view.setFloat64(9, v, true);
      callback(view);
    };
    mainCanvas.onclick = function (e) {
      if (spawnOnClick == true) {
        spawnOnClick = false;
        var cursor_x = e.clientX;
        var cursor_y = e.clientY;
        var day = (input - canvasWidth / 2) / viewZoom + nodeX;
        var dt = (y - canvasHeight / 2) / viewZoom + nodeY;
        action(day, dt);
      }
    };
    mainCanvas.onmousedown = function (event) {
      var x = event.clientX;
      var y = event.clientY;
      var timeSubmittedDiff = new Date().getTime() - duedate;
      if (
        timeSubmittedDiff > 5000 &&
        x >= 10 &&
        x <= 10 + rwidth &&
        y >= 200 - topScrollMargin &&
        y <= 200
      ) {
        sendCommand(nextSlide);
        duedate = new Date().getTime();
      }
      var i = 0;
      for (; i < result.length; i++) {
        if (result[i].userId != 0 && result[i].userId != undefined) {
          if (
            x >= result[i].name_x &&
            x <= result[i].name_x + result[i].name_w &&
            y <= result[i].name_y &&
            y >= result[i].name_y - result[i].name_h
          ) {
            console.log(result[i].userId);
            var wnd = window.open(
              "http://agarz.com/" + update() + "/home/" + result[i].userId,
              "_blank"
            );
            wnd.focus();
            break;
          }
        }
      }
      create(x, y);
    };
    if (isTouch) {
      mainCanvas.addEventListener("touchstart", onTouchStart, false);
      mainCanvas.addEventListener("touchmove", onTouchMove, false);
      mainCanvas.addEventListener("touchend", onTouchEnd, false);
    }
    mainCanvas.onmouseup = function () {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", handleWheel, false);
    } else {
      document.body.onmousewheel = handleWheel;
    }
    mainCanvas.onfocus = function () {
      hasClasses = false;
    };
    if (document.getElementById("chat_textbox")) {
      document.getElementById("chat_textbox").onblur = function () {
        hasClasses = false;
      };
    }
    if (document.getElementById("chat_textbox")) {
      document.getElementById("chat_textbox").onfocus = function () {
        hasClasses = true;
      };
    }
    var xAvailable = false;
    var preshared = false;
    var hasSongChanged = false;
    var isOpenEditAlertShown = false;
    var _0x28623b = 0;
    var isInScript = false;
    var isBrowserWithWindow = false;
    var hasColStyle = false;
    var hasColClasses = false;
    wHandle.onkeydown = function (event) {
      var password = jQuery("#overlays").is(":visible");
      switch (event.keyCode) {
        case 32:
          if (!xAvailable && !hasClasses && password == false) {
            move();
            reset(17);
            xAvailable = true;
          }
          break;
        case 49:
          if (!username && !password) {
            reset(19);
            username = true;
          }
          break;
        case 50:
          if (!user && !password) {
            reset(20);
            user = true;
          }
          break;
        case 81:
          if (!preshared && password == false) {
            reset(18);
            preshared = true;
          }
          break;
        case 87:
          if (!hasSongChanged && !hasClasses && password == false) {
            move();
            reset(21);
            hasSongChanged = true;
          }
          break;
        case 27:
          document.getElementById("overlays").style.display = "block";
          wHandle.isSpectating = false;
          break;
        case 13:
          if (hasClasses) {
            hasClasses = false;
            document.getElementById("chat_textbox").blur();
            command = document.getElementById("chat_textbox").value;
            if (command.length > 0) {
              sendCommand(command);
            }
            document.getElementById("chat_textbox").value = "";
          } else {
            if (!jQuery("#overlays").is(":visible")) {
              hasClasses = true;
            }
          }
          break;
        case 69:
          if (!isOpenEditAlertShown && !hasClasses && password == false) {
            isOpenEditAlertShown = true;
            reset(22);
          }
          break;
        case 65:
          if (!isInScript && !hasClasses && password == false) {
            isInScript = true;
            move();
            reset(4);
          }
          break;
        case 83:
          if (!isBrowserWithWindow && !hasClasses && password == false) {
            isBrowserWithWindow = true;
            reset(24);
          }
          break;
        case 90:
          if (!hasColStyle && !hasClasses && password == false) {
            hasColStyle = true;
            if (setting) {
              reset(35);
            }
          }
          break;
        case 88:
          if (!hasColClasses && !hasClasses && password == false) {
            hasColClasses = true;
            if (setting) {
              reset(36);
            }
          }
          break;
      }
    };
    wHandle.onkeyup = function (event) {
      switch (event.keyCode) {
        case 32:
          xAvailable = false;
          break;
        case 87:
          hasSongChanged = false;
          break;
        case 49:
          if (username) {
            username = false;
          }
          break;
        case 50:
          if (user) {
            user = false;
          }
          break;
        case 81:
          if (preshared) {
            preshared = false;
          }
          break;
        case 69:
          if (isOpenEditAlertShown) {
            isOpenEditAlertShown = false;
            reset(23);
          }
          break;
        case 65:
          isInScript = false;
          break;
        case 83:
          isBrowserWithWindow = false;
          break;
        case 90:
          if (hasColStyle) {
            hasColStyle = false;
            reset(37);
          }
          break;
        case 88:
          if (hasColClasses) {
            hasColClasses = false;
            reset(38);
          }
          break;
      }
    };
    wHandle.onblur = function () {
      hasSongChanged = preshared = xAvailable = false;
    };
    wHandle.onresize = resize;
    resize();
    if (wHandle.requestAnimationFrame) {
      wHandle.requestAnimationFrame(redrawGameScene);
    } else {
      setInterval(draw, 16.666666666667);
    }
    if (encodedPW) {
      jQuery("#region").val(encodedPW);
    }
    document.getElementById("overlays").style.display = "block";
    resize();
    var pix_color = "";
    var raw_composed_type = "abcdefghijklmnopqrstuvxyz0123456789";
    var _0x4b9061 = 0;
    for (; _0x4b9061 < 6; _0x4b9061++) {
      pix_color =
        pix_color +
        raw_composed_type.charAt(
          Math.floor(Math.random() * raw_composed_type.length)
        );
    }
    isActive = document.getElementById("myTeam");
    jQuery("#enterPriceYes").click(function () {
      document.getElementById("enterPriceConfirmDialog").style.display = "none";
      setItem();
    });
    jQuery("#enterPriceNo").click(function () {
      document.getElementById("enterPriceConfirmDialog").style.display = "none";
      document.getElementById("overlays").style.display = "block";
    });
    jQuery("#versionWrongDialog_ok").click(function () {
      document.getElementById("versionWrongDialog").style.display = "none";
      document.getElementById("overlays").style.display = "block";
    });
    jQuery("#generalErrorDialog_ok").click(function () {
      document.getElementById("generalErrorDialog").style.display = "none";
      document.getElementById("overlays").style.display = "block";
    });
    jQuery("#finalLeaderboardDialog_ok").click(function () {
      document.getElementById("finalLeaderboardDialog").style.display = "none";
      document.getElementById("overlays").style.display = "block";
    });
  }
  function onTouchStart(event) {
    var i = 0;
    for (; i < event.changedTouches.length; i++) {
      var c = event.changedTouches[i];
      var newNode = false;
      if (originalValue == true) {
        newNode = render(c.clientX, c.clientY);
      }
      if (newNode == false && leftTouchID < 0) {
        leftTouchID = c.identifier;
        x.set(c.clientX, c.clientY);
        self.setFrom(x);
        proxy.set(0, 0);
      }
    }
    touches = event.touches;
  }
  function onTouchMove(event) {
    event.preventDefault();
    var i = 0;
    for (; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      if (leftTouchID == touch.identifier) {
        self.set(touch.clientX, touch.clientY);
        proxy.setFrom(self);
        proxy.subtract(x);
        input = proxy.x * 3 + canvasWidth / 2;
        y = proxy.y * 3 + canvasHeight / 2;
        moveTo();
        move();
      }
    }
    touches = event.touches;
  }
  function onTouchEnd(event) {
    touches = event.touches;
    var i = 0;
    for (; i < event.changedTouches.length; i++) {
      var evt = event.changedTouches[i];
      getXYCoords(evt.clientX, evt.clientY);
      if (leftTouchID == evt.identifier) {
        leftTouchID = -1;
        proxy.set(0, 0);
        break;
      }
    }
  }
  function handleWheel(event) {
    zoom = zoom * Math.pow(0.9, event.wheelDelta / -120 || event.detail || 0);
    if (0.1 > zoom) {
      zoom = 0.1;
    }
    if (zoom > 4 / viewZoom) {
      zoom = 4 / viewZoom;
    }
  }
  function buildQTree() {
    if (0.4 > viewZoom) {
      qTree = null;
    } else {
      var a = Number.POSITIVE_INFINITY;
      var b = Number.POSITIVE_INFINITY;
      var c = Number.NEGATIVE_INFINITY;
      var d = Number.NEGATIVE_INFINITY;
      var e = 0;
      var i = 0;
      for (; i < nodelist.length; i++) {
        var node = nodelist[i];
        if (
          node.shouldRender() &&
          !node.prepareData &&
          20 < node.size * viewZoom
        ) {
          e = Math.max(node.size, e);
          a = Math.min(node.x, a);
          b = Math.min(node.y, b);
          c = Math.max(node.x, c);
          d = Math.max(node.y, d);
        }
      }
      qTree = Quad.init({
        minX: a - (e + 100),
        minY: b - (e + 100),
        maxX: c + (e + 100),
        maxY: d + (e + 100),
        maxChildren: 2,
        maxDepth: 4,
      });
      i = 0;
      for (; i < nodelist.length; i++) {
        node = nodelist[i];
        if (node.shouldRender() && !(20 >= node.size * viewZoom)) {
          a = 0;
          for (; a < node.points.length; ++a) {
            b = node.points[a].x;
            c = node.points[a].y;
            if (
              !(
                b < nodeX - canvasWidth / 2 / viewZoom ||
                c < nodeY - canvasHeight / 2 / viewZoom ||
                b > nodeX + canvasWidth / 2 / viewZoom ||
                c > nodeY + canvasHeight / 2 / viewZoom
              )
            ) {
              qTree.insert(node.points[a]);
            }
          }
        }
      }
    }
  }
  function moveTo() {
    X = (input - canvasWidth / 2) / viewZoom + nodeX;
    Y = (y - canvasHeight / 2) / viewZoom + nodeY;
  }
  function wsConnect() {
    try {
      ws.close();
    } catch (_0x271834) {}
    ws = null;
  }
  function connect2() {
    // sid = Math.floor(1 + Math.random() * 1000000);
    wsUrl = CONNECTION_URL;
    element = [];
    playerCells = [];
    nodes = {};
    nodelist = [];
    autolayoutsToUpdate = [];
    childrenDescriptors = [];
    queue = [];
    str = "?";
    value = "";
    text = "";
    output = "";
    this.countdown = 3600;
    mainCanvas = teamScores = null;
    A = 0;
    n = 0;
    snakeArray = [];
    activeBlobs = [];
    ws = new WebSocket(wsUrl);
    ws.binaryType = "arraybuffer";
    ws.onopen = onOpen;
    ws.onmessage = onWsMessage;
    ws.onclose = run;
    ws.onerror = function () {
      console.log("socket error");
    };
  }
  function get(length) {
    return new DataView(new ArrayBuffer(length));
  }
  function callback(input) {
    ws.send(input.buffer);
  }
  function sync() {
    encode();
    close();
    wHandle.sendScopeAround();
    pack();
    listener();

    spawnOnClick = true;
  }
  function emit() {
    if (oldScriptElement == singletext) {
      translate();
      if (wHandle.isSpectating == true) {
        reset(15);
      } else {
        if (
          localStorage.userToken != null &&
          localStorage.userToken.length == 32
        ) {
          var view = get(65);
          view.setUint8(0, 3);
          var i = 1;
          var n = 0;
          for (; n < 32; ++n) {
            var id = localStorage.userToken.charCodeAt(n);
            view.setUint16(i, id, true);
            i = i + 2;
          }
          callback(view);
        } else {
          view = get(1);
          view.setUint8(0, 8);
          callback(view);
        }
      }
    } else {
      if (singletext != 0) {
        showGeneralError(txt_266, "C:" + oldScriptElement + " S:" + singletext);
      }
    }
  }
  function translate() {
    var view = get(2);
    view.setUint8(0, 25);
    switch (update()) {
      case "tr":
        view.setUint8(1, 1);
        break;
      case "en":
        view.setUint8(1, 2);
        break;
      case "es":
        view.setUint8(1, 3);
        break;
      case "de":
        view.setUint8(1, 4);
        break;
    }
    callback(view);
  }
  function onOpen() {
    console.log("onWsOpen");
    result = [];
    var head = get(5);
    head.setUint8(0, 255);
    head.setUint32(1, oldScriptElement, true);
    callback(head);
  }
  function run() {
    console.log("onWsClose");
    ws = null;
    if ($("#finalLeaderboardDialog").is(":visible") == false) {
      document.getElementById("overlays").style.display = "block";
    }
    wHandle.isSpectating = false;
  }
  function onWsMessage(msg) {
    try {
      parse(new DataView(msg.data));
    } catch (conv_reverse_sort) {
      console.log(conv_reverse_sort);
      var _0xcbca05 = 0;
    }
  }
  function formatDate(type, index, value) {
    switch (update()) {
      case "tr":
        return type + " KAZANAN " + value + " SKOR " + index.dotFormat();
      case "en":
        return type + " WINNER IS " + value + " SCORE " + index.dotFormat();
      case "es":
        return (
          type +
          " GANADOR ES " +
          value +
          " PUNTUACI\u00c3\u201cN " +
          index.dotFormat()
        );
      case "de":
        return type + " GEWINNER " + value + " ERGEBNIS " + index.dotFormat();
    }
    return "err lang code!";
  }
  function search(expr, value, type) {
    switch (update()) {
      case "tr":
        return expr + " REKOR! " + type + " SKOR " + value.dotFormat();
      case "en":
        return expr + " NEW RECORD! " + type + " SCORE " + value.dotFormat();
      case "es":
        return (
          expr +
          " NEUVO RECORD! " +
          type +
          " PUNTUACI\u00c3\u201cN " +
          value.dotFormat()
        );
      case "de":
        return (
          expr + " NEUER EINTRAG! " + type + " ERGEBNIS " + value.dotFormat()
        );
    }
    return "err lang code!";
  }
  function load(language, state, country) {
    switch (update()) {
      case "tr":
        return (
          language +
          " KLAN SAVA\u00c5\u009eINI '" +
          country +
          "' KAZANDI! \u00c3\u2013D\u00c3\u0153L:" +
          state.dotFormat() +
          " BONUS GOLD!"
        );
      case "en":
        return (
          language +
          " CLAN WAR WINNER IS '" +
          country +
          "'! PRIZE:" +
          state.dotFormat() +
          " BONUS GOLD!"
        );
      case "es":
        return (
          language +
          " CLAN WAR WINNER IS '" +
          country +
          "'! PRIZE:" +
          state.dotFormat() +
          " BONUS GOLD!"
        );
      case "de":
        return (
          language +
          " CLAN WAR WINNER IS '" +
          country +
          "'! PRIZE:" +
          state.dotFormat() +
          " BONUS GOLD!"
        );
    }
    return "err lang code!";
  }
  function resolve(type) {
    if (type.startsWith("trans ")) {
      var componentsStr = type.substring(6);
      var attrs = componentsStr.split(",");
      if (attrs[0] == "1") {
        var val = attrs[1];
        var key = parseInt(attrs[2]);
        var options = attrs.slice(3).join(" ");
        return formatDate(val, key, options);
      } else {
        if (attrs[0] == "2") {
          val = attrs[1];
          key = parseInt(attrs[2]);
          options = attrs.slice(3).join(" ");
          return search(val, key, options);
        } else {
          if (attrs[0] == "3") {
            val = attrs[1];
            var option = parseInt(attrs[2]);
            var userCountry = attrs.slice(3).join(" ");
            return load(val, option, userCountry);
          } else {
            return type;
          }
        }
      }
    } else {
      return type;
    }
  }
  function parse(data) {
    function encode() {
      var string = "";
      var characterCode;
      for (; (characterCode = data.getUint16(offset, true)) != 0; ) {
        offset = offset + 2;
        string = string + String.fromCharCode(characterCode);
      }
      return (offset = offset + 2), string;
    }
    var offset = 0;
    var _0x490d75 = false;
    var gloups = data.getUint8(offset);
    offset = offset + 1;
    switch (gloups) {
      case 16:
        break;
      case 17:
        posX = data.getFloat32(offset, true);
        offset = offset + 4;
        posY = data.getFloat32(offset, true);
        offset = offset + 4;
        posSize = data.getFloat32(offset, true);
        offset = offset + 4;
        break;
      case 20:
        playerCells = [];
        element = [];
        break;
      case 21:
        lineX = data.getInt16(offset, true);
        offset = offset + 2;
        lineY = data.getInt16(offset, true);
        offset = offset + 2;
        if (!_0x412574) {
          _0x412574 = true;
          drawLineX = lineX;
          drawLineY = lineY;
        }
        break;
      case 32:
        element.push(data.getUint32(offset, true));
        offset = offset + 4;
        break;
      case 48:
        _0x490d75 = true;
        _0x5216f8 = true;
        break;
      case 49:
        if (!_0x490d75) {
          _0x5216f8 = false;
        }
        teamScores = null;
        var frameBuffer = data.getUint32(offset, true);
        offset = offset + 4;
        childrenDescriptors = [];
        tmp_flow_path = 0;
        for (; tmp_flow_path < frameBuffer; ++tmp_flow_path) {
          var offsetPrecision = data.getUint32(offset, true);
          offset = offset + 4;
          childrenDescriptors.push({
            id: offsetPrecision,
            name: encode(),
          });
        }
        redraw();
        break;
      case 50:
        teamScores = [];
        var wCoor = data.getUint32(offset, true);
        offset = offset + 4;
        var tmp_flow_path = 0;
        for (; tmp_flow_path < wCoor; ++tmp_flow_path) {
          teamScores.push(data.getFloat32(offset, true));
          offset = offset + 4;
        }
        redraw();
        break;
      case 51:
        queue = [];
        var nextVal = data.getUint8(offset, true);
        offset = offset + 1;
        tmp_flow_path = 0;
        for (; tmp_flow_path < nextVal; ++tmp_flow_path) {
          var offsetPrecision = data.getUint32(offset, true);
          offset = offset + 4;
          var audioOffsetX = data.getUint16(offset, true);
          offset = offset + 2;
          var languageOffsetY = data.getUint16(offset, true);
          offset = offset + 2;
          var input = data.getUint16(offset, true);
          offset = offset + 2;
          var srsLen = data.getUint8(offset, true);
          offset = offset + 1;
          var _0x190d48 = 0;
          var _0x1fcd6a = 0;
          if ((srsLen & 1) == 1) {
            _0x190d48 = 1;
          }
          if ((srsLen & 2) == 2) {
            _0x1fcd6a = 1;
          }
          queue.push({
            pID: offsetPrecision,
            x: audioOffsetX,
            y: languageOffsetY,
            i: input,
            sameClan: _0x190d48,
            sameTeam: _0x1fcd6a,
          });
        }
        redraw();
        break;
      case 52:
        queue = [];
        var rawObject = data.getUint16(offset, true);
        offset = offset + 2;
        tmp_flow_path = 0;
        for (; tmp_flow_path < rawObject; ) {
          var id = data.getUint32(offset, true);
          offset = offset + 4;
          var value = "";
          var _0x13d399 = 0;
          for (; _0x13d399 < 15; _0x13d399++) {
            var index = data.getUint16(offset, true);
            offset = offset + 2;
            if (index != 0) {
              value = value + String.fromCharCode(index);
            }
          }
          var filename = data.getUint32(offset, true);
          offset = offset + 4;
          var path = "";
          _0x13d399 = 0;
          for (; _0x13d399 < 16; _0x13d399++) {
            index = data.getUint16(offset, true);
            offset = offset + 2;
            if (index != 0) {
              path = path + String.fromCharCode(index);
            }
          }
          res.push({
            pid: id,
            ip: value,
            uid: filename,
            name: path,
          });
          if (aaa == 1) {
            console.log(id + "|" + value + "|" + filename + "|" + path);
          } else {
            console.log(id + "|" + filename + "|" + path);
          }
          tmp_flow_path++;
        }
        break;
      case 64:
        xMin = data.getFloat64(offset, true);
        offset = offset + 8;
        b = data.getFloat64(offset, true);
        offset = offset + 8;
        xMax = data.getFloat64(offset, true);
        offset = offset + 8;
        r = data.getFloat64(offset, true);
        offset = offset + 8;
        posX = (xMax + xMin) / 2;
        posY = (r + b) / 2;
        posSize = 1;
        if (0 == playerCells.length) {
          nodeX = posX;
          nodeY = posY;
          viewZoom = posSize;
        }
        break;
      case 87:
        id = "";
        for (; (index = data.getUint16(offset, true)) != 0; ) {
          offset = offset + 2;
          id = id + String.fromCharCode(index);
        }
        if (id == "KLAN SAVA\u00c5\u009eLARI" && update() != "tr") {
          id = "CLAN WAR";
        }
        break;
      case 88:
        activeBlobs = [];
        for (; offset < data.byteLength; ) {
          var response = data.getUint16(offset, true);
          offset = offset + 2;
          var toMove = data.getUint16(offset, true);
          offset = offset + 2;
          activeBlobs.push({
            x: response,
            y: toMove,
          });
        }
        break;
      case 89:
        break;
      case 90:
        snakeArray = [];
        for (; offset < data.byteLength; ) {
          response = data.getUint16(offset, true);
          offset = offset + 2;
          toMove = data.getUint16(offset, true);
          offset = offset + 2;
          snakeArray.push({
            x: response,
            y: toMove,
          });
        }
        break;
      case 91:
        start(data, offset);
        break;
      case 92:
        this.gameName = "";
        for (; (index = data.getUint16(offset, true)) != 0; ) {
          offset = offset + 2;
          this.gameName += String.fromCharCode(index);
        }
        break;
      case 93:
        console.log("user logout by server");
        var colorstring = "";
        for (; (index = data.getUint16(offset, true)) != 0; ) {
          offset = offset + 2;
          colorstring = colorstring + String.fromCharCode(index);
        }
        user_logout(colorstring);
        break;
      case 94:
        attributesFormData = data.getInt32(offset, true);
        break;
      case 95:
        var voiFile = data.getUint8(offset++);
        switch (voiFile) {
          case 1:
            value = "";
            for (; (index = data.getUint16(offset, true)) != 0; ) {
              offset = offset + 2;
              value = value + String.fromCharCode(index);
            }
            value = resolve(value);
            break;
          case 2:
            text = "";
            for (; (index = data.getUint16(offset, true)) != 0; ) {
              offset = offset + 2;
              text = text + String.fromCharCode(index);
            }
            text = resolve(text);
            break;
          case 3:
            output = "";
            for (; (index = data.getUint16(offset, true)) != 0; ) {
              offset = offset + 2;
              output = output + String.fromCharCode(index);
            }
            output = resolve(output);
            break;
        }
        break;
      case 96:
        this.countdown = data.getUint16(offset, true);
        break;
      case 97:
        str = "";
        for (; (index = data.getUint16(offset, true)) != 0; ) {
          offset = offset + 2;
          str = str + String.fromCharCode(index);
        }
        document.getElementById("idLastWinner").value = str;
        break;
      case 98:
        var val = data.getUint32(offset, true);
        offset = offset + 4;
        var msg = data.getUint32(offset, true);
        parseMx(val, msg);
        break;
      case 99:
        debug(data, offset);
        break;
      case 100:
        updateNodes(data, offset);
        break;
      case 101:
        cb(data, offset);
        break;
      case 102:
        chunk = data.getUint32(offset, true);
        offset = offset + 4;
        console.log("record_uid " + chunk);
        id = "";
        for (; (index = data.getUint16(offset, true)) != 0; ) {
          offset = offset + 2;
          id = id + String.fromCharCode(index);
        }
        if (id == "KLAN SAVA\u00c5\u009eLARI" && update() != "tr") {
          id = "CLAN WAR";
        }
        break;
      case 103:
        name = data.getInt32(offset, true);
        offset = offset + 4;
        that = fn(name);
        if (that != null) {
          if (aaa == 1) {
            console.log(
              "\u00c4\u00b0zlenen Oyuncu:" +
                that.uid +
                " " +
                that.ip +
                " " +
                that.name
            );
          } else {
            console.log(
              "\u00c4\u00b0zlenen Oyuncu:" + that.uid + " " + that.name
            );
          }
        }
        console.log("spectatorId " + name);
        break;
      case 104:
        targetRowId = data.getInt32(offset, true);
        offset = offset + 4;
        break;
      case 105:
        window.location.reload(false);
        break;
      case 106:
        voiFile = data.getUint8(offset++);
        console.log("\u00c3\u00bcst mesajlar\u00c4\u00b1 sil " + voiFile);
        break;
      case 107:
        timezone = data.getInt32(offset, true);
        offset = offset + 4;
        console.log("winPrize " + timezone);
        break;
      case 108:
        endTime = data.getInt32(offset, true);
        offset = offset + 4;
        var geoJSON_str = txt_263.replace("[GOLD]", endTime.dotFormat());
        $("#enterPriceLine1").text(geoJSON_str);
        console.log("enterPrice " + endTime);
        break;
      case 109:
        console.log("Initialised");
        emit();
        break;
      case 110:
        singletext = data.getInt32(offset, true);
        if (singletext == "1332175218") {
          showGeneralError("G\u00c3\u00bcncelleme sebebiyle odaya girilemiyor");
          wsConnect();
        }
        break;
      case 111:
        info = data.getInt32(offset, true);
        offset = offset + 4;
        switch (info) {
          case 0:
            document.getElementById("overlays").style.display = "block";
            break;
          case 1:
            sync();
            break;
          case 2:
            jQuery("#overlays").hide();
            jQuery("#enterPriceConfirmDialog").show();
            break;
          case 3:
            showGeneralError(info_3, info);
            break;
          case 4:
            showGeneralError("Login tamamlanmad\u00c4\u00b1!");
            break;
          case 5:
            showGeneralError(
              "Hesaps\u00c4\u00b1z \u00c3\u00b6deme yap\u00c4\u00b1lamaz! "
            );
            break;
          case 6:
            showGeneralError(
              "Bu oda i\u00c3\u00a7in \u00c3\u00b6deme yapmak gerekmiyor!"
            );
            break;
          case 7:
            showGeneralError(
              "\u00c3\u2013deme daha \u00c3\u00b6nce yap\u00c4\u00b1lm\u00c4\u00b1\u00c5\u0178!"
            );
            break;
          case 8:
            showGeneralError(info_8, info);
            break;
          case 9:
            showGeneralError(info_9, info);
            break;
          case 10:
            console.log("oyuncu zaten spawn olmu\u00c5\u0178");
            break;
          case 11:
            console.log(
              "bu ks odas\u00c4\u00b1nda izleme yap\u00c4\u00b1lamaz"
            );
            break;
          case 12:
            console.log("oyuncu oyunda, izleme yap\u00c4\u00b1lamaz");
            break;
          case 13:
            console.log("hata 13");
            break;
        }
        break;
      case 112:
        frontBuf = data.getInt32(offset, true);
        offset = offset + 4;
        break;
      case 113:
        var offsetPrecision = data.getUint16(offset, true);
        offset = offset + 2;
        var message = data.getUint32(offset, true);
        offset = offset + 4;
        switch (offsetPrecision) {
          case 1:
            ongoingMessage = message;
            console.log(
              "Par\u00c3\u00a7a b\u00c3\u00bcy\u00c3\u00bckl\u00c3\u00bc\u00c4\u0178\u00c3\u00bc " +
                message
            );
            break;
          case 2:
            errorMessage = message;
            console.log(
              "Par\u00c3\u00a7a say\u00c4\u00b1s\u00c4\u00b1 " + message
            );
            break;
        }
        break;
      case 114:
        var srsLen = data.getUint16(offset, true);
        offset = offset + 2;
        jQuery("#finalList").empty();
        var photoText =
          "<tr><td></td>" +
          '<td style="text-align:center;font-size: 22px;text-shadow: 1px 1px 30px;">' +
          txt_58 +
          "</td>" +
          '<td style="text-align:center;font-size: 22px;text-shadow: 1px 1px 30px;">' +
          txt_60 +
          "</td></tr>";
        jQuery("#finalList").append(photoText);
        tmp_flow_path = 0;
        for (; tmp_flow_path < srsLen; tmp_flow_path++) {
          filename = data.getUint32(offset, true);
          offset = offset + 4;
          var offsetPrecision = data.getUint32(offset, true);
          offset = offset + 4;
          path = "";
          msg = 32;
          for (; msg > 0; ) {
            msg--;
            index = data.getUint16(offset, true);
            offset = offset + 2;
            if (index != 0) {
              path = path + String.fromCharCode(index);
            } else {
              break;
            }
          }
          var installerCommunityPath;
          if (filename != 0) {
            var destination_url = "http://agarz.com/" + l + "/home/" + filename;
            installerCommunityPath =
              '<a href="' +
              destination_url +
              '" target="_blank">' +
              path +
              "</a>";
          } else {
            installerCommunityPath = path;
          }
          jQuery("#finalList").append(
            "<tr><td>" +
              (tmp_flow_path + 1) +
              ".</td><td>" +
              installerCommunityPath +
              "</td><td>" +
              offsetPrecision.dotFormat() +
              "</td></tr>"
          );
          console.log(
            tmp_flow_path + " " + filename + " " + offsetPrecision + " " + path
          );
        }
        jQuery("#finalLeaderboardDialog").show();
        break;
    }
  }
  function parseMx(val, msg) {}
  function debug(data, offset) {
    function getString() {
      var string = "";
      var characterCode;
      for (; (characterCode = data.getUint16(offset, true)) != 0; ) {
        offset = offset + 2;
        string = string + String.fromCharCode(characterCode);
      }
      return (offset = offset + 2), string;
    }
    var _0x8feeb1 = data.getUint8(offset++);
    if (_0x8feeb1 & 2) {
      offset = offset + 4;
    }
    if (_0x8feeb1 & 4) {
      offset = offset + 8;
    }
    if (_0x8feeb1 & 8) {
      offset = offset + 16;
    }
    var longNameFlag = data.getUint8(offset++);
    var shortNameFlag = data.getUint8(offset++);
    var b = data.getUint8(offset++);
    var currentFilePath = (
      (longNameFlag << 16) |
      (shortNameFlag << 8) |
      b
    ).toString(16);
    for (; currentFilePath.length > 6; ) {
      currentFilePath = "0" + currentFilePath;
    }
    currentFilePath = "#" + currentFilePath;
    result.push({
      name: getString(),
      color: currentFilePath,
      message: getString(),
      time: Date.now(),
    });
  }
  function start(view, offset) {
    function createContext() {
      var string = "";
      var characterCode;
      for (; (characterCode = view.getUint16(offset, true)) != 0; ) {
        offset = offset + 2;
        string = string + String.fromCharCode(characterCode);
      }
      return (offset = offset + 2), string;
    }
    var longNameFlag = view.getUint8(offset++);
    var shortNameFlag = view.getUint8(offset++);
    var b = view.getUint8(offset++);
    var value = ((longNameFlag << 16) | (shortNameFlag << 8) | b).toString(16);
    var text = view.getUint32(offset);
    offset = offset + 4;
    for (; value.length > 6; ) {
      value = "0" + value;
    }
    value = "#" + value;
    var ctx = createContext();
    var c = createContext();
    evaluate(text, value, ctx, c);
    waitUntilQuiet();
  }
  function evaluate(id, data, key, src) {
    result.push({
      userId: id,
      name: key,
      color: data,
      message: src,
      time: Date.now(),
      name_x: 0,
      name_y: 0,
      name_w: 0,
      name_h: 0,
      msg_x: 0,
      msg_y: 0,
      msg_w: 0,
      msg_h: 0,
    });
    if (result.length > 15) {
      result.shift();
    }
  }
  function cb(data, offset) {
    var offsetPrecision = data.getUint16(offset, true);
    offset = offset + 2;
    var srsLen = data.getUint16(offset, true);
    offset = offset + 2;
    var i = 0;
    for (; i < srsLen; i++) {
      var offsetPrecision = data.getUint16(offset, true);
      offset = offset + 2;
      var url = "";
      for (; true; ) {
        var i = data.getUint16(offset, true);
        offset = offset + 2;
        if (i == 0) {
          break;
        }
        url = url + String.fromCharCode(i);
      }
      skinName = "";
      for (; true; ) {
        var bite = data.getUint16(offset, true);
        offset = offset + 2;
        if (0 == bite) {
          break;
        }
        skinName = skinName + String.fromCharCode(bite);
      }
      d = 0;
      for (; d < nodelist.length; d++) {
        if (nodelist[d].pID == offsetPrecision) {
          nodelist[d].clan_id = offsetPrecision;
          nodelist[d].setName(url);
          nodelist[d].hasSkinName = true;
          nodelist[d].setSkinName(skinName);
        }
      }
    }
  }
  function updateNodes(view, offset) {
    timestamp = +new Date();
    var key = Math.random();
    var i = 0;
    for (;;) {
      var nodeid = view.getUint32(offset, true);
      offset = offset + 4;
      if (0 == nodeid) {
        break;
      }
      ++i;
      var size;
      var posY;
      var posX = view.getInt16(offset, true);
      offset = offset + 2;
      posY = view.getInt16(offset, true);
      offset = offset + 2;
      size = view.getInt16(offset, true);
      offset = offset + 2;
      var longNameFlag = view.getUint8(offset++);
      var shortNameFlag = view.getUint8(offset++);
      var b = view.getUint8(offset++);
      var color = ((longNameFlag << 16) | (shortNameFlag << 8) | b).toString(
        16
      );
      for (; 6 > color.length; ) {
        color = "0" + color;
      }
      var colorstr = "#" + color;
      var flag = view.getUint8(offset++);
      var flagVirus = !!(flag & 1);
      var flagAgitated = !!(flag & 16);
      if (flag & 2) {
        offset = offset + 4;
      }
      if (flag & 4) {
        offset = offset + 8;
      }
      if (flag & 8) {
        offset = offset + 16;
      }
      var value = view.getUint16(offset, true);
      offset = offset + 2;
      var node = null;
      if (nodes.hasOwnProperty(nodeid)) {
        node = nodes[nodeid];
        node.updatePos();
        node.ox = node.x;
        node.oy = node.y;
        node.oSize = node.size;
        node.color = colorstr;
      } else {
        node = new Cell(nodeid, posX, posY, size, colorstr, "");
        nodelist.push(node);
        nodes[nodeid] = node;
        node.ka = posX;
        node.la = posY;
        node.clan_id = 0;
      }
      node.pID = value;
      node.isVirus = flagVirus;
      node.isAgitated = flagAgitated;
      node.nx = posX;
      node.ny = posY;
      node.nSize = size;
      node.calcScoreWidth(ctx);
      node.updateCode = key;
      node.updateTime = timestamp;
      node.flag = flag;
      if (-1 != element.indexOf(nodeid) && -1 == playerCells.indexOf(node)) {
        document.getElementById("overlays").style.display = "none";
        playerCells.push(node);
        if (1 == playerCells.length) {
          nodeX = node.x;
          nodeY = node.y;
          _0x11185d = true;
        }
      }
    }
    queueLength = view.getUint32(offset, true);
    offset = offset + 4;
    i = 0;
    for (; i < queueLength; i++) {
      var token = view.getUint32(offset, true);
      offset = offset + 4;
      node = nodes[token];
      if (null != node) {
        node.destroy();
      }
    }
    if (playerCells.length == 0 && _0x11185d == true) {
      greyLeft = START_X;
      y_top = corner_y;
    }
  }
  function move() {
    if (send()) {
      var inputScaled = input - canvasWidth / 2;
      var cellsFromTopLeftY = y - canvasHeight / 2;
      if (Math.abs(oldX - X) > 10 || Math.abs(oldY - Y) > 10) {
        oldX = X;
        oldY = Y;
        var v = get(21);
        v.setUint8(0, 16);
        v.setFloat64(1, X, true);
        v.setFloat64(9, Y, true);
        v.setUint32(17, 0, true);
        callback(v);
      }
    }
  }
  function sendNick() {
    var param_hash = document.getElementById("nick").value;
    if (send()) {
      var data = get(3 * param_hash.length);
      data.setUint8(0, 0);
      var i = 0;
      for (; i < param_hash.length; ++i) {
        data.setUint16(3 * i, param_hash.charCodeAt(i), true);
      }
      callback(data);
    }
  }
  function close() {
    var cupcakeInput = document.getElementById("txtSkin").value;
    var param_hash = cupcakeInput.toLowerCase();
    if (send() && null != param_hash) {
      var data = get(3 * param_hash.length);
      data.setUint8(0, 2);
      var i = 0;
      for (; i < param_hash.length; ++i) {
        data.setUint16(3 * i, param_hash.charCodeAt(i), true);
      }
      callback(data);
    }
  }
  function pack() {
    var param_hash = document.getElementById("nick").value;
    var data = get(3 * param_hash.length);
    data.setUint8(0, 7);
    var i = 0;
    for (; i < param_hash.length; ++i) {
      data.setUint16(3 * i, param_hash.charCodeAt(i), true);
    }
    callback(data);
  }
  function listener() {
    var view = get(1);
    view.setUint8(0, 9);
    callback(view);
  }
  function action(d, v) {
    var view = get(17);
    view.setUint8(0, 11);
    view.setFloat64(1, d, true);
    view.setFloat64(9, v, true);
    callback(view);
  }
  function setItem() {
    var view = get(1);
    view.setUint8(0, 10);
    callback(view);
  }
  function encode() {
    var selector = document.getElementById("myTeam").value;
    if (send() && selector != null && selector.length > 0) {
      var view = get(3 * selector.length);
      var i = 0;
      view.setUint8(i++, 26);
      var endIndex = 0;
      for (; endIndex < selector.length; ++endIndex) {
        var valueLength = selector.charCodeAt(endIndex);
        view.setUint16(i, valueLength, true);
        i = i + 2;
      }
      callback(view);
    }
  }
  function sendCommand(command) {
    if (send() && command.length < 200 && command.length > 0) {
      var view = get(4 * command.length);
      var offset = 0;
      view.setUint8(offset++, 99);
      view.setUint8(offset++, 0);
      var i = 0;
      for (; i < command.length; ++i) {
        view.setUint16(offset, command.charCodeAt(i), true);
        offset = offset + 2;
      }
      callback(view);
    }
  }
  function send() {
    return null != ws && ws.readyState == ws.OPEN;
  }
  function reset(num) {
    if (send()) {
      var view = get(1);
      view.setUint8(0, num);
      callback(view);
    }
  }
  function redrawGameScene() {
    draw();
    wHandle.requestAnimationFrame(redrawGameScene);
  }
  function resize() {
    window.scrollTo(0, 0);
    canvasWidth = wHandle.innerWidth;
    canvasHeight = wHandle.innerHeight;
    nCanvas.width = canvasWidth;
    nCanvas.height = canvasHeight;
    var answersContainer = jQuery("#helloDialog");
    var numberOfHeadersToCount = answersContainer.height();
    var averageDistanceBetweenHeaders = canvasHeight / numberOfHeadersToCount;
    if (averageDistanceBetweenHeaders < 1) {
    } else {
    }
    draw();
  }
  function viewRange() {
    var top = Math.max(canvasHeight / 1080, canvasWidth / 1920);
    return top * zoom;
  }
  function calcViewZoom() {
    if (0 != playerCells.length) {
      var newViewZoom = 0;
      var i = 0;
      for (; i < playerCells.length; i++) {
        newViewZoom = newViewZoom + playerCells[i].size;
      }
      newViewZoom = Math.pow(Math.min(64 / newViewZoom, 1), 0.4) * viewRange();
      viewZoom = (9 * viewZoom + newViewZoom) / 10;
    }
  }
  function draw() {
    var a;
    var duedate = Date.now();
    ++_0x504ed5;
    var difMinutes = Date.now() - startMinutes;
    if (difMinutes > 50) {
      startMinutes = Date.now();
      move();
    }
    timestamp = duedate;
    if (0 < playerCells.length) {
      calcViewZoom();
      var c = (a = 0);
      var d = 0;
      for (; d < playerCells.length; d++) {
        playerCells[d].updatePos();
        a = a + playerCells[d].x / playerCells.length;
        c = c + playerCells[d].y / playerCells.length;
      }
      posX = a;
      posY = c;
      posSize = viewZoom;
      nodeX = (nodeX + a) / 2;
      nodeY = (nodeY + c) / 2;
    } else {
      nodeX = (29 * nodeX + posX) / 30;
      nodeY = (29 * nodeY + posY) / 30;
      viewZoom = (9 * viewZoom + posSize * viewRange()) / 10;
    }
    buildQTree();
    moveTo();
    ctx.fillStyle = showDarkTheme ? "#111111" : "#F2FBFF";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    nodelist.sort(function (a, b) {
      return a.size == b.size ? a.id - b.id : a.size - b.size;
    });
    ctx.save();
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.scale(viewZoom, viewZoom);
    ctx.translate(-nodeX, -nodeY);
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 10;
    ctx.lineCap = "square";
    ctx.lineJoin = "square";
    ctx.beginPath();
    ctx.moveTo(xMin, b);
    ctx.lineTo(xMax, b);
    ctx.lineTo(xMax, r);
    ctx.lineTo(xMin, r);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = showDarkTheme ? "#AAAAAA" : "#000000";
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 1;
    if (viewZoom > 0.07) {
      var multiplier = 50;
      ctx.beginPath();
      var x = xMin;
      for (; x <= xMax; x = x + multiplier) {
        ctx.moveTo(x, b);
        ctx.lineTo(x, r);
      }
      var y = b;
      for (; y <= r; y = y + multiplier) {
        ctx.moveTo(xMin, y);
        ctx.lineTo(xMax, y);
      }
      ctx.stroke();
    }
    if (lines == !![]) {
      ctx.globalAlpha = 0.6;
    } else {
      ctx.globalAlpha = 1;
    }
    _0x3c0ad8 = 0;
    if (
      playerCells.length > 0 &&
      typeof playerCells[0].clan_id !== "undefined"
    ) {
      _0x3c0ad8 = playerCells[0].clan_id;
    }
    d = 0;
    for (; d < nodelist.length; d++) {
      nodelist[d].drawOneCell(ctx);
    }
    if (_0x412574) {
      drawLineX = (3 * drawLineX + lineX) / 4;
      drawLineY = (3 * drawLineY + lineY) / 4;
      ctx.save();
      ctx.strokeStyle = "#FFAAAA";
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      d = 0;
      for (; d < playerCells.length; d++) {
        ctx.moveTo(playerCells[d].x, playerCells[d].y);
        ctx.lineTo(drawLineX, drawLineY);
      }
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
    if (this.countdown < 3600) {
      var s = "";
      if (typeof this.gameName !== "undefined") {
        s = s + (this.gameName + " ");
      }
      s = s + "[";
      var values = Math.floor(this.countdown / 60);
      if (values < 10) {
        s = s + "0";
      }
      s = s + (values + ":");
      var p_padChar = this.countdown % 60;
      if (p_padChar < 10) {
        s = s + "0";
      }
      s = s + p_padChar;
      s = s + "]";
      ctx.font = "30px Ubuntu";
      var padding = ctx.measureText(s).width;
      var value = s + " " + id;
      var width = ctx.measureText(value).width;
      var x = (canvasWidth - width) * 0.5;
      var labelsY = 30;
      ctx.globalAlpha = 0.4;
      if (showDarkTheme == ![]) {
        ctx.fillStyle = "#000000";
      } else {
        ctx.fillStyle = "#DDDDDD";
      }
      ctx.fillRect(x - 10, 0, width + 20, 40);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#0000FF";
      ctx.fillText(s, x, labelsY);
      ctx.fillStyle = "#FFFF00";
      ctx.fillText(" " + id, x + padding, labelsY);
    }
    if (visible === true) {
      if (linesCrossDim == 0) {
        linesCrossDim = new Date().getTime();
      } else {
        var remainingAlignContentDim = new Date().getTime() - linesCrossDim;
        if (remainingAlignContentDim >= 1000) {
          var lastTouchStretch = remainingAlignContentDim / 1000;
          currentMeasure =
            Math.round((touchStretch / lastTouchStretch) * 10000) / 10000;
          linesCrossDim = new Date().getTime();
          touchStretch = 1;
        } else {
          touchStretch++;
        }
      }
      ctx.globalAlpha = 1;
      if (showDarkTheme == !![]) {
        ctx.fillStyle = "#FFFFFF";
      } else {
        ctx.fillStyle = "#000000";
      }
      ctx.font = "30px Ubuntu";
      ctx.fillText("fps " + currentMeasure, 10, 240);
    }
    ctx.globalAlpha = 1;
    if (showDarkTheme == !![]) {
      ctx.fillStyle = "#FFFF00";
    } else {
      ctx.fillStyle = "#AAAA00";
    }
    ctx.font = "30px Ubuntu";
    ctx.fillText("Gold: " + attributesFormData.dotFormat(), 10, 270);
    if (endTime > 0) {
      ctx.globalAlpha = 1;
      if (showDarkTheme == !![]) {
        ctx.fillStyle = "#0000FF";
      } else {
        ctx.fillStyle = "#0000AA";
      }
      ctx.font = "30px Ubuntu";
      ctx.fillText(txt_174 + ": " + timezone.dotFormat(), 10, 300);
      ctx.globalAlpha = 1;
      if (showDarkTheme == !![]) {
        ctx.fillStyle = "#FF0000";
      } else {
        ctx.fillStyle = "#FF0000";
      }
      ctx.font = "30px Ubuntu";
      ctx.fillText(txt_267 + ": " + endTime.dotFormat(), 10, 330);
    }
    var introWordLeft;
    var labelsY;
    ctx.font = "30px Ubuntu";
    var titleWidth = ctx.measureText(value).width;
    introWordLeft = (canvasWidth - titleWidth) * 0.5;
    labelsY = 70;
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#FF0000";
    ctx.fillText(value, introWordLeft, labelsY);
    introWordLeft = (canvasWidth - ctx.measureText(text).width) * 0.5;
    labelsY = labelsY + 30;
    ctx.fillText(text, introWordLeft, labelsY);
    introWordLeft = (canvasWidth - ctx.measureText(output).width) * 0.5;
    labelsY = labelsY + 30;
    ctx.fillText(output, introWordLeft, labelsY);
    if (lbCanvas && lbCanvas.width) {
      ctx.drawImage(lbCanvas, canvasWidth - lbCanvas.width - 10, 10);
    }
    if (!newValue) {
      if (chatCanvas != null && chatCanvas.width > 0) {
        ctx.drawImage(chatCanvas, 0, canvasHeight - chatCanvas.height - 50);
      }
    }
    n = getScore();
    A = Math.max(A, n);
    var label = "Score";
    var Bri = "Max";
    switch (update()) {
      case "tr":
        label = "Skor";
        Bri = "Maks.";
        break;
      case "en":
        label = "Score";
        Bri = "Max";
        break;
      case "es":
        label = "Puntuaci\u00c3\u00b3n";
        Bri = "Max";
        break;
      case "de":
        label = "Ergebnis";
        Bri = "Max";
        break;
    }
    ctx.globalAlpha = 0.8;
    if (showDarkTheme == !![]) {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = "#000000";
    }
    ctx.font = "24px Ubuntu";
    ctx.fillText(label + ": " + n.dotFormat(), 10, 34);
    ctx.fillText(Bri + ": " + A.dotFormat(), 10, 60);
    var PIXEL_CELL_SIZE = 5;
    ctx.globalAlpha = 0.4;
    if (showDarkTheme == !![]) {
      ctx.fillStyle = "#DDDDDD";
    } else {
      ctx.fillStyle = "#000000";
    }
    ctx.fillRect(10, 80, 100, 100);
    ctx.globalAlpha = 1;
    if (greyLeft != 0 && y_top != 0 && _0x11185d == true) {
      if (showDarkTheme == !![]) {
        ctx.fillStyle = "#FF0000";
      } else {
        ctx.fillStyle = "#990000";
      }
      ctx.fillRect(greyLeft, y_top, PIXEL_CELL_SIZE, PIXEL_CELL_SIZE);
    }
    if (showDarkTheme == !![]) {
      ctx.fillStyle = parBgColor;
    } else {
      ctx.fillStyle = parBgColor;
    }
    var i = 0;
    for (; i < activeBlobs.length; i++) {
      START_X = 10 + (activeBlobs[i].x / xMax) * 100 - PIXEL_CELL_SIZE * 0.5;
      corner_y = 80 + (activeBlobs[i].y / r) * 100 - PIXEL_CELL_SIZE * 0.5;
      ctx.fillRect(START_X, corner_y, PIXEL_CELL_SIZE, PIXEL_CELL_SIZE);
    }
    if (showDarkTheme == !![]) {
      ctx.fillStyle = linGrad;
    } else {
      ctx.fillStyle = linGrad;
    }
    i = 0;
    for (; i < snakeArray.length; i++) {
      START_X = 10 + (snakeArray[i].x / xMax) * 100 - PIXEL_CELL_SIZE * 0.5;
      corner_y = 80 + (snakeArray[i].y / r) * 100 - PIXEL_CELL_SIZE * 0.5;
      ctx.fillRect(START_X, corner_y, PIXEL_CELL_SIZE, PIXEL_CELL_SIZE);
    }
    START_X = 10 + (nodeX / xMax) * 100 - PIXEL_CELL_SIZE * 0.5;
    corner_y = 80 + (nodeY / r) * 100 - PIXEL_CELL_SIZE * 0.5;
    if (showDarkTheme == !![]) {
      ctx.fillStyle = "#FFFFFF";
    } else {
      ctx.fillStyle = "#FFFFFF";
    }
    ctx.fillRect(START_X, corner_y, PIXEL_CELL_SIZE, PIXEL_CELL_SIZE);
    ctx.globalAlpha = 1;
    ctx.font = "16px Ubuntu";
    var className = "share";
    switch (update()) {
      case "tr":
        className = "payla\u00c5\u0178";
        break;
      case "en":
        className = "share";
        break;
      case "es":
        className = "compartir";
        break;
      case "de":
        className = "aktie";
        break;
    }
    var name =
      Math.round(nodeX / 1000) +
      " , " +
      Math.round(nodeY / 1000) +
      " " +
      className;
    rwidth = ctx.measureText(name).width;
    topScrollMargin = 16;
    nextSlide =
      "*** " +
      Math.round(nodeX / 1000) +
      " , " +
      Math.round(nodeY / 1000) +
      " ***";
    if (showDarkTheme == !![]) {
      ctx.fillStyle = "#AAAAAA";
    } else {
      ctx.fillStyle = "#000000";
    }
    ctx.fillText(name, 10, 200);
    drawTouch(ctx);
    if (newValue == false) {
      var yScaleFactor = 0;
      i = result.length - 1;
      for (; i >= 0; i--) {
        yScaleFactor++;
        if (yScaleFactor > 15) {
          break;
        }
        var label = result[i].name.trim();
        if (label == "") {
          label = "AgarZ";
        }
        var msg = result[i].message.trim();
        var _0x3ec9a8 = msg.substring(0, 3);
        if (_0x3ec9a8 == "-t ") {
          msg = msg.substring(3);
        } else {
          if (_0x3ec9a8 == "-c ") {
            msg = msg.substring(3);
          }
        }
        var message = " : " + msg;
        if (result[i].userId == -1) {
          message = msg;
        }
        if (result[i].userId == chunk) {
          ctx.font = "bold 18px Arial";
        } else {
          ctx.font = "18px Arial";
        }
        result[i].name_x = 15;
        result[i].name_y = canvasHeight - 10 * yScaleFactor;
        result[i].name_w = ctx.measureText(label).width;
        result[i].name_h = 18;
        result[i].msg_x = 15 + result[i].name_w;
        result[i].msg_y = result[i].name_y;
        result[i].msg_w = ctx.measureText(message).width;
        result[i].msg_h = result[i].name_h;
        if (result[i].userId != -1) {
          ctx.fillStyle = result[i].color;
          ctx.fillText(label, result[i].name_x, result[i].name_y);
        }
        if (result[i].userId == -1) {
          if (showDarkTheme == !![]) {
            ctx.fillStyle = "#FF0000";
          } else {
            ctx.fillStyle = "#FF0000";
          }
        } else {
          if (_0x3ec9a8 == "-t ") {
            if (showDarkTheme == !![]) {
              ctx.fillStyle = "#CCCC00";
            } else {
              ctx.fillStyle = "#CCCC00";
            }
          } else {
            if (_0x3ec9a8 == "-c ") {
              if (showDarkTheme == !![]) {
                ctx.fillStyle = "#00CCCC";
              } else {
                ctx.fillStyle = "#0000CC";
              }
            } else {
              if (showDarkTheme == !![]) {
                ctx.fillStyle = "#FFFFFF";
              } else {
                ctx.fillStyle = "#000000";
              }
            }
          }
        }
        ctx.fillText(message, result[i].msg_x, result[i].msg_y);
      }
    }
    if (originalValue == true) {
      ctx.font = "18px Arial";
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#000000";
      var px = 10;
      if (newValue == !![]) {
        x1 = px;
      } else {
        x1 = 400;
      }
      bottom = canvasHeight - size - 10;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#F1C40F";
      ctx.fillRect(x1, bottom, width, i);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillText("Esc", x1 + 5, bottom + 34);
      cx = x1 + width + px;
      top = bottom;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#F1C40F";
      ctx.fillRect(cx, top, cw, h);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillText("A", cx + 5, top + 34);
      x2 = cx + cw + px;
      cy = top;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#F1C40F";
      ctx.fillRect(x2, cy, radius, ch);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillText("S", x2 + 5, cy + 34);
      left = x2 + radius + px;
      height = cy;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#F1C40F";
      ctx.fillRect(left, height, w, labelHeight);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillText("W", left + 5, height + 34);
      pos = left + w + px;
      y1 = height;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#F1C40F";
      ctx.fillRect(pos, y1, elemWidth, dy);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillText("E", pos + 5, y1 + 34);
      startX = pos + elemWidth + px;
      y2 = y1;
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#F1C40F";
      ctx.fillRect(startX, y2, max_w, max_h);
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#000000";
      ctx.fillText("Space", startX + 5, y2 + 34);
    }
    var timeSubmittedDiff = Date.now() - duedate;
    if (timeSubmittedDiff > 16.666666666667) {
      brightness = brightness - 0.01;
    } else {
      if (timeSubmittedDiff < 15.384615384615) {
        brightness = brightness + 0.01;
      }
    }
    if (0.4 > brightness) {
      brightness = 0.4;
    }
    if (1 < brightness) {
      brightness = 1;
    }
  }
  function drawTouch(ctx) {
    ctx.save();
    if (isTouch) {
      var i = 0;
      for (; i < touches.length; i++) {
        var touch = touches[i];
        if (touch.identifier == leftTouchID) {
          ctx.beginPath();
          ctx.strokeStyle = "#0096ff";
          ctx.lineWidth = 6;
          ctx.arc(x.x, x.y, 40, 0, Math.PI * 2, true);
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#0096ff";
          ctx.lineWidth = 2;
          ctx.arc(x.x, x.y, 60, 0, Math.PI * 2, true);
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#0096ff";
          ctx.arc(self.x, self.y, 40, 0, Math.PI * 2, true);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.strokeStyle = "#0096ff";
          ctx.lineWidth = "6";
          ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI * 2, true);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
  }
  function drawGrid() {
    ctx.fillStyle = showDarkTheme ? "#111111" : "#F2FBFF";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.strokeStyle = showDarkTheme ? "#AAAAAA" : "#000000";
    ctx.globalAlpha = 0.2;
    ctx.scale(viewZoom, viewZoom);
    var a = canvasWidth / viewZoom;
    var b = canvasHeight / viewZoom;
    var d = -0.5 + ((-nodeX + a / 2) % 50);
    for (; d < a; d = d + 50) {
      ctx.beginPath();
      ctx.moveTo(d, 0);
      ctx.lineTo(d, b);
      ctx.stroke();
    }
    d = -0.5 + ((-nodeY + b / 2) % 50);
    for (; d < b; d = d + 50) {
      ctx.beginPath();
      ctx.moveTo(0, d);
      ctx.lineTo(a, d);
      ctx.stroke();
    }
    ctx.restore();
  }
  function getScore() {
    var val = 0;
    var i = 0;
    for (; i < playerCells.length; i++) {
      val = val + playerCells[i].getScore();
    }
    return val;
  }
  function merge(templateSorted) {
    var i = 0;
    for (; i < queue.length; i++) {
      if (queue[i].pID == templateSorted) {
        return queue[i];
      }
    }
    return null;
  }
  function redraw() {
    lbCanvas = null;
    if (teamScores != null || childrenDescriptors.length != 0) {
      if (null != teamScores || showName) {
        lbCanvas = document.createElement("canvas");
        var ctx = lbCanvas.getContext("2d");
        var boardLength;
        if (teamScores == null) {
          boardLength = 84 * childrenDescriptors.length;
        } else {
          boardLength = 240;
        }
        var scaleFactor =
          Math.min(0.22 * canvasHeight, Math.min(250, 0.3 * canvasWidth)) / 250;
        lbCanvas.width = 250 * scaleFactor;
        lbCanvas.height = boardLength * scaleFactor;
        ctx.scale(scaleFactor, scaleFactor);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 250, boardLength);
        ctx.globalAlpha = 1;
        if (teamScores == null) {
          ctx.fillStyle = "#FFFF00";
          ctx.font = "20px Ubuntu";
          ctx.fillText(str, 125 - ctx.measureText(str).width / 2, 40);
          ctx.fillStyle = "#FFFFFF";
          var i = 0;
          for (; i < childrenDescriptors.length; i++) {
            var item = childrenDescriptors[i];
            var existingDescription = "AgarZ.com";
            if (item.name != null) {
              existingDescription = item.name.trim();
              if (existingDescription == "") {
                existingDescription = "AgarZ.com";
              }
            }
            var tempPathText = void 0;
            if (!_0x5216f8) {
              tempPathText = "" + (i + 1) + ". " + existingDescription;
            } else {
              tempPathText = existingDescription;
            }
            var beginWidth = ctx.measureText(tempPathText).width;
            if (item.id == name) {
              ctx.fillStyle = "#0000FF";
            } else {
              if (item.id == targetRowId) {
                ctx.fillStyle = "#FFAAAA";
              } else {
                var actionUrls = merge(item.id);
                ctx.fillStyle = "#FFFFFF";
                if (actionUrls != null) {
                  if (actionUrls.sameTeam == 1) {
                    ctx.fillStyle = oGradient;
                  } else {
                    if (actionUrls.sameClan == 1) {
                      ctx.fillStyle = color;
                    }
                  }
                }
              }
            }
            ctx.fillText(tempPathText, 125 - beginWidth / 2, 94 * i);
          }
        } else {
          switch (str) {
            case "K\u00c4\u00b1rm\u00c4\u00b1z\u00c4\u00b1":
              ctx.fillStyle = "#FF0000";
              break;
            case "Ye\u00c5\u0178il":
              ctx.fillStyle = "#00FF00";
              break;
            case "Mavi":
              ctx.fillStyle = "#0000FF";
              break;
          }
          ctx.font = "20px Ubuntu";
          ctx.fillText(str, 100 - ctx.measureText(str).width / 2, 40);
          var i = (c = 0);
          for (; i < teamScores.length; ++i) {
            var d = c + teamScores[i] * Math.PI * 2;
            ctx.fillStyle = css[i + 1];
            ctx.beginPath();
            ctx.moveTo(100, 140);
            ctx.arc(100, 140, 80, c, d, false);
            ctx.fill();
            c = d;
          }
        }
      }
    }
  }
  function Cell(id, x, y, size, color, name) {
    this.id = id;
    this.ox = this.x = x;
    this.oy = this.y = y;
    this.oSize = this.size = size;
    this.color = color;
    this.points = [];
    this.pointsAcc = [];
    this.createPoints();
    this.setName(name);
  }
  wHandle.li = function () {
    if (that) {
      console.log(that.pid);
      var view = get(5);
      view.setUint8(0, 43);
      view.setUint32(1, that.pid, true);
      callback(view);
    }
  };
  wHandle.ipBan = function () {
    if (that) {
      console.log(that.pid);
      var view = get(5);
      view.setUint8(0, 42);
      view.setUint32(1, that.pid, true);
      callback(view);
    }
  };
  wHandle.kick = function () {
    if (that) {
      console.log("pid:" + that.pid);
      var view = get(5);
      view.setUint8(0, 41);
      view.setUint32(1, that.pid, true);
      callback(view);
    }
  };
  wHandle.observeOnlyPaid = function (value) {
    var view = get(2);
    view.setUint8(0, 45);
    view.setUint8(1, value, true);
    callback(view);
  };
  wHandle.closeObservers = function (canCreateDiscussions) {
    var view = get(1);
    view.setUint8(0, 46);
    callback(view);
  };
  wHandle.getPlayerByPID = fn;
  wHandle.scopeAroundEnable = function () {
    reset(5);
  };
  wHandle.scopeAroundDisable = function () {
    reset(6);
  };
  wHandle.setScopeAround = function (dataBase64) {
    localStorage.scopeAround = dataBase64;
    wHandle.sendScopeAround();
  };
  wHandle.sendScopeAround = function () {
    if (localStorage.scopeAround === "true") {
      wHandle.scopeAroundEnable();
    } else {
      wHandle.scopeAroundDisable();
    }
  };
  wHandle.setserver3 = function (canCreateDiscussions) {
    CONNECTION_URL = "wss://agarz.com:" + canCreateDiscussions;
    wsConnect();
  };
  wHandle.setserver = function (val) {
    if (val != gameMode) {
      CONNECTION_URL = val;
      gameMode = val;
      wsConnect();
    }
  };
  showGeneralError = function updateContextButton(data, value) {
    if (typeof value === "undefined") {
      value = "";
    }
    jQuery(".anyDialog").hide();
    jQuery("#generalErrorDialog_line1").html(data);
    jQuery("#generalErrorDialog_line2").html(value);
    jQuery("#generalErrorDialog").show();
  };
  var _0x852fdd = "./skins/";
  var _0x212f06;
  var _0x5141cf;
  var isTouch = "createTouch" in document;
  var touches = [];
  var leftTouchID = -1;
  var self = new point2(0, 0);
  var x = new point2(0, 0);
  var proxy = new point2(0, 0);
  var touchStretch = 0;
  var linesCrossDim = 0;
  var currentMeasure = 12.345;
  var rwidth = 100;
  var topScrollMargin = 20;
  var nextSlide = "!";
  var duedate = 0;
  var attributesFormData = 0;
  var START_X = 0;
  var corner_y = 0;
  var greyLeft = 0;
  var y_top = 0;
  var _0x11185d = false;
  var _0x39384d = false;
  var username = false;
  var user = false;
  var IteratorPrototype = 0;
  var methods = 0;
  var localProtocol = wHandle.location.protocol;
  var localProtocolHttps = "https:" == localProtocol;
  var nCanvas;
  var ctx;
  var mainCanvas;
  var lbCanvas;
  var chatCanvas;
  var canvasWidth;
  var canvasHeight;
  var qTree = null;
  var ws = null;
  var nodeX = 0;
  var nodeY = 0;
  var element = [];
  var playerCells = [];
  var nodes = {};
  var nodelist = [];
  var autolayoutsToUpdate = [];
  var childrenDescriptors = [];
  var str = "?";
  var id = "?";
  var _0x37b417 = "?";
  var _0x23e4b2 = 3600;
  var result = [];
  var input = 0;
  var y = 0;
  var X = -1;
  var Y = -1;
  var _0x504ed5 = 0;
  var timestamp = 0;
  var xMin = 0;
  var b = 0;
  var xMax = 10000;
  var r = 10000;
  var viewZoom = 1;
  var encodedPW = null;
  var enabled = true;
  var showName = true;
  var showColor = false;
  var _0x2da338 = false;
  var n = 0;
  var A = 0;
  var showDarkTheme = false;
  var visible = false;
  var isEnabled = false;
  var state = false;
  var setting = false;
  var originalValue = false;
  var val = 0.4;
  var lines = false;
  var newValue = false;
  var posX = (nodeX = ~~((xMin + xMax) / 2));
  var posY = (nodeY = ~~((b + r) / 2));
  var posSize = 1;
  var gameMode = "";
  var teamScores = null;
  var _0x412574 = false;
  var lineX = 0;
  var lineY = 0;
  var drawLineX = 0;
  var drawLineY = 0;
  var _0x284105 = 0;
  var css = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
  var zoom = 1;
  var _0x4f30fa =
    "ontouchstart" in wHandle &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  var _0x5216f8 = false;
  var chunk = -1;
  var textedCanvas = document.createElement("canvas");
  var _0x107590 = null;
  wHandle.isSpectating = false;
  var snakeArray = [];
  var activeBlobs = [];
  var startMinutes = Date.now();
  var res = [];
  var size = 70;
  var x1 = 0;
  var bottom = 0;
  var width = size;
  var i = size;
  var cx = 0;
  var top = 0;
  var cw = size;
  var h = size;
  var x2 = 0;
  var cy = 0;
  var radius = size;
  var ch = size;
  var left = 0;
  var height = 0;
  var w = size;
  var labelHeight = size;
  var pos = 0;
  var y1 = 0;
  var elemWidth = size;
  var dy = size;
  var projectResample = 0;
  var startX = 0;
  var y2 = 0;
  var max_w = size;
  var max_h = size;
  var _0x3c0ad8 = 0;
  var name = -1;
  var targetRowId = -1;
  var frontBuf = 0;
  var that = null;
  var root = 0;
  var value = "";
  var text = "";
  var output = "";
  var queue = [];
  var color = "#00FF00";
  var oGradient = "#DDDD00";
  var parBgColor = "#0000FF";
  var linGrad = "#DDDD00";
  var timezone = 0;
  var endTime = 0;
  var oldScriptElement = 10000;
  var singletext = 0;
  var ongoingMessage = 0;
  var errorMessage = 0;
  var oneSecondTick = function writeTextArgs() {
    root++;
    var i = 0;
    for (; i < nodelist.length; i++) {
      var el = nodelist[i];
      el.changeSkin();
    }
  };
  setInterval(oneSecondTick, 2000);
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      return (
        (position = position || 0),
        this.substr(position, searchString.length) === searchString
      );
    };
  }
  wHandle.wsClose = wsConnect;
  $(wHandle).focus(function () {});
  $(wHandle).blur(function () {
    if (ws != null && ws.readyState == 1) {
    }
  });
  wHandle.li = function () {
    if (that) {
      console.log(that.pid);
      var view = get(5);
      view.setUint8(0, 43);
      view.setUint32(1, that.pid, true);
      callback(view);
    }
  };
  wHandle.onClickPlay = function () {
    return (
      jQuery("#overlays").hide(),
      (n = 0),
      (A = 0),
      (name = -1),
      (targetRowId = -1),
      ws == null || ws.readyState == 2 || ws.readyState == 3
        ? (wsConnect(), connect2())
        : emit(),
      false
    );
  };
  wHandle.setSkins = function (val) {
    enabled = val;
    localStorage.showSkin = val;
  };
  wHandle.setNames = function (name) {
    showName = name;
    localStorage.showName = name;
  };
  wHandle.setDarkTheme = function (arg) {
    showDarkTheme = arg;
    localStorage.showDarkTheme = arg;
  };
  wHandle.setFps = function (value) {
    visible = value;
    localStorage.showFps = value;
  };
  wHandle.setNoColor = function (arg) {
    showColor = arg;
    localStorage.noColor = arg;
  };
  wHandle.setSmooth = function (value) {
    val = value ? 2 : 0.4;
    localStorage.smoothRender = value ? 2 : 0.4;
  };
  wHandle.setTransparent = function (data) {
    lines = data;
    localStorage.transparentRender = data;
  };
  wHandle.setShowScore = function (enabled) {
    isEnabled = enabled;
    localStorage.showScore = enabled;
  };
  wHandle.setSimpleGreen = function (currentState) {
    state = currentState;
    localStorage.simpleGreen = currentState;
  };
  wHandle.setTouchButtons = function (value) {
    originalValue = value;
    localStorage.touchButtons = value;
  };
  wHandle.setHideChat = function (val) {
    newValue = val;
    localStorage.hideChat = val;
    if (val) {
      jQuery("#chat_textbox").hide();
    } else {
      jQuery("#chat_textbox").show();
    }
  };
  wHandle.spectate = function () {
    name = -1;
    targetRowId = -1;
    wHandle.isSpectating = true;
    jQuery("#overlays").hide();
    if (ws == null || ws.readyState == 2 || ws.readyState == 3) {
      connect2();
    } else {
      emit();
      getPlayerList();
    }
  };
  wHandle.setGameMode = function (val) {
    if (val != gameMode) {
      gameMode = val;
      connect2();
    }
  };
  wHandle.resetGold = function () {
    attributesFormData = 0;
  };
  wHandle.setMacro = function (json) {
    setting = json;
    localStorage.macro = json;
  };
  wHandle.topMsgClear = function () {
    reset(39);
  };
  var _0x24773e = 500;
  var oldX = -1;
  var oldY = -1;
  var _0x198dfd = null;
  var brightness = 1;
  var _0x533830 = null;
  var args = {};
  var gl = {};
  var related_node_ids = ["_canvas'blob"];
  Cell.prototype = {
    id: 0,
    points: null,
    pointsAcc: null,
    name: null,
    nameWidth: 0,
    skinName: null,
    skinList: [],
    skinIndex: 0,
    hasSkinName: false,
    sizeCache: null,
    x: 0,
    y: 0,
    size: 0,
    ox: 0,
    oy: 0,
    oSize: 0,
    nx: 0,
    ny: 0,
    nSize: 0,
    scoreWidth: 0,
    flag: 0,
    updateTime: 0,
    updateCode: 0,
    drawTime: 0,
    destroyed: false,
    isVirus: false,
    isAgitated: false,
    wasSimpleDrawing: true,
    destroy: function onResponse() {
      var i;
      i = 0;
      for (; i < nodelist.length; i++) {
        if (nodelist[i] == this) {
          nodelist.splice(i, 1);
          break;
        }
      }
      delete nodes[this.id];
      i = playerCells.indexOf(this);
      if (-1 != i) {
        _0x2da338 = true;
        playerCells.splice(i, 1);
      }
      i = element.indexOf(this.id);
      if (-1 != i) {
        element.splice(i, 1);
      }
      this.destroyed = true;
      autolayoutsToUpdate.push(this);
    },
    getNameSize: function Dinosaurus() {
      return Math.max(~~(0.3 * this.size), 24);
    },
    setName: function mapHttpUrlToWebSocketUrl(uri) {
      this.name = uri;
    },
    calcNameWidth: function vbmi_drawTitle(context) {
      context.font = this.getNameSize() + "px Ubuntu";
      this.nameWidth = context.measureText(this.name).width;
    },
    calcScoreWidth: function create(ctx) {
      ctx.font = this.getNameSize() + "px Ubuntu";
      this.scoreWidth = ctx.measureText(this.getScore()).width;
    },
    setSkinName: function onConfigLoaded(result) {
      this.skinList = result.split(";");
      this.skinName = this.skinList[this.skinIndex];
    },
    changeSkin: function constructFrames() {
      if (this.skinList[0] == "?k") {
        this.skinIndex = ((root + this.id) % (this.skinList.length - 1)) + 1;
      } else {
        this.skinIndex = root % this.skinList.length;
      }
    },
    createPoints: function parse() {
      var samplenum = this.getNumPoints();
      for (; this.points.length > samplenum; ) {
        var i = ~~(Math.random() * this.points.length);
        this.points.splice(i, 1);
        this.pointsAcc.splice(i, 1);
      }
      if (0 == this.points.length && 0 < samplenum) {
        this.points.push({
          ref: this,
          size: this.size,
          x: this.x,
          y: this.y,
        });
        this.pointsAcc.push(Math.random() - 0.5);
      }
      for (; this.points.length < samplenum; ) {
        var i = ~~(Math.random() * this.points.length);
        var p = this.points[i];
        this.points.splice(i, 0, {
          ref: this,
          size: p.size,
          x: p.x,
          y: p.y,
        });
        this.pointsAcc.splice(i, 0, this.pointsAcc[i]);
      }
    },
    getNumPoints: function run() {
      if (0 == this.id) {
        return 16;
      }
      var maxPrimaryDepth = 10;
      if (20 > this.size) {
        maxPrimaryDepth = 0;
      }
      if (this.isVirus) {
        maxPrimaryDepth = 30;
      }
      var b = this.size;
      if (!this.isVirus) {
        b = b * viewZoom;
      }
      b = b * brightness;
      if (this.flag & 32) {
        b = b * 0.25;
      }
      return ~~Math.max(b, maxPrimaryDepth);
    },
    movePoints: function update() {
      this.createPoints();
      var points = this.points;
      var pointsacc = this.pointsAcc;
      var numpoints = points.length;
      var i = 0;
      for (; i < numpoints; ++i) {
        var pos1 = pointsacc[(i - 1 + numpoints) % numpoints];
        var pos2 = pointsacc[(i + 1) % numpoints];
        pointsacc[i] += (Math.random() - 0.5) * (this.isAgitated ? 3 : 1);
        pointsacc[i] *= 0.7;
        if (10 < pointsacc[i]) {
          pointsacc[i] = 10;
        }
        if (-10 > pointsacc[i]) {
          pointsacc[i] = -10;
        }
        pointsacc[i] = (pos1 + pos2 + 8 * pointsacc[i]) / 10;
      }
      var ref = this;
      var isvirus = this.isVirus
        ? 0
        : (this.id / 1000 + timestamp / 10000) % (2 * Math.PI);
      var j = 0;
      for (; j < numpoints; ++j) {
        var f = points[j].size;
        var e = points[(j - 1 + numpoints) % numpoints].size;
        var m = points[(j + 1) % numpoints].size;
        if (
          15 < this.size &&
          null != qTree &&
          20 < this.size * viewZoom &&
          0 != this.id
        ) {
          var maximizingNode = false;
          var n = points[j].x;
          var q = points[j].y;
          qTree.retrieve2(n - 5, q - 5, 10, 10, function (a) {
            if (
              a.ref != ref &&
              25 > (n - a.x) * (n - a.x) + (q - a.y) * (q - a.y)
            ) {
              maximizingNode = true;
            }
          });
          if (
            (!maximizingNode && points[j].x < xMin) ||
            points[j].y < b ||
            points[j].x > xMax ||
            points[j].y > r
          ) {
            maximizingNode = true;
          }
          if (maximizingNode) {
            if (0 < pointsacc[j]) {
              pointsacc[j] = 0;
            }
            pointsacc[j] -= 1;
          }
        }
        f = f + pointsacc[j];
        if (0 > f) {
          f = 0;
        }
        f = this.isAgitated
          ? (19 * f + this.size) / 20
          : (12 * f + this.size) / 13;
        points[j].size = (e + m + 8 * f) / 10;
        e = (2 * Math.PI) / numpoints;
        m = this.points[j].size;
        if (this.isVirus && 0 == j % 2) {
          m = m + 5;
        }
        points[j].x = this.x + Math.cos(e * j + isvirus) * m;
        points[j].y = this.y + Math.sin(e * j + isvirus) * m;
      }
    },
    updatePos: function run() {
      if (0 == this.id) {
        return 1;
      }
      var A;
      A = (timestamp - this.updateTime) / 120;
      A = 0 > A ? 0 : 1 < A ? 1 : A;
      var b = 0 > A ? 0 : 1 < A ? 1 : A;
      this.getNameSize();
      if (this.destroyed && 1 <= b) {
        var existingProxyIndex = autolayoutsToUpdate.indexOf(this);
        if (-1 != existingProxyIndex) {
          autolayoutsToUpdate.splice(existingProxyIndex, 1);
        }
      }
      return (
        (this.x = A * (this.nx - this.ox) + this.ox),
        (this.y = A * (this.ny - this.oy) + this.oy),
        (this.size = b * (this.nSize - this.oSize) + this.oSize),
        b
      );
    },
    shouldRender: function horde_SpawnPoint_proto_update() {
      if (this.size <= 32 && viewZoom <= 0.07) {
        return false;
      }
      return 0 == this.id
        ? !![]
        : !(
            this.x + this.size + 40 < nodeX - canvasWidth / 2 / viewZoom ||
            this.y + this.size + 40 < nodeY - canvasHeight / 2 / viewZoom ||
            this.x - this.size - 40 > nodeX + canvasWidth / 2 / viewZoom ||
            this.y - this.size - 40 > nodeY + canvasHeight / 2 / viewZoom
          );
    },
    getScore: function run() {
      var foundMatched = ~~((this.nSize * this.nSize) / 100);
      return foundMatched;
    },
    drawOneCell: function draw(ctx) {
      if (this.shouldRender()) {
        if (
          this.id != 0 &&
          this.isVirus == false &&
          this.isAgitated == false &&
          val > viewZoom
        ) {
          b = !![];
        } else {
          b = false;
        }
        if (this.getNumPoints() < 5) {
          b = true;
        }
        if (this.wasSimpleDrawing && !b) {
          var c = 0;
          for (; c < this.points.length; c++) {
            this.points[c].size = this.size;
          }
        }
        this.wasSimpleDrawing = b;
        ctx.save();
        this.drawTime = timestamp;
        c = this.updatePos();
        if (this.destroyed) {
          ctx.globalAlpha *= 1 - c;
        }
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineJoin = this.isVirus ? "miter" : "round";
        if (showColor) {
          ctx.fillStyle = "#FFFFFF";
          ctx.strokeStyle = "#AAAAAA";
        } else {
          ctx.fillStyle = this.color;
          ctx.strokeStyle = this.color;
        }
        if (b || state == true) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        } else {
          this.movePoints();
          ctx.beginPath();
          var d = this.getNumPoints();
          ctx.moveTo(this.points[0].x, this.points[0].y);
          c = 1;
          for (; c <= d; ++c) {
            var e = c % d;
            ctx.lineTo(this.points[e].x, this.points[e].y);
          }
        }
        ctx.closePath();
        c = null;
        if (!this.isAgitated && enabled && ":teams" != gameMode) {
          if (this.hasSkinName == false) {
            this.skinName = this.name.toLowerCase();
            if (this.skinName.indexOf("[") != -1) {
              var lastDelimIdx = this.skinName.indexOf("[");
              var endingIdx = this.skinName.indexOf("]");
              this.skinName = this.skinName.slice(lastDelimIdx + 1, endingIdx);
            }
            this.skinName = this.name.toLowerCase();
            if (this.skinName.indexOf("[") != -1) {
              lastDelimIdx = this.skinName.indexOf("[");
              endingIdx = this.skinName.indexOf("]");
              this.skinName = this.skinName.slice(lastDelimIdx + 1, endingIdx);
            }
          }
          if (this.skinName != "") {
            if (!args.hasOwnProperty(this.skinName)) {
              args[this.skinName] = new Image();
              args[this.skinName].src = "//cdn.agarz.com/" + this.skinName;
              args[this.skinName].onload = function () {
                gl[this.src] = true;
              };
            }
            if (
              0 != args[this.skinName].width &&
              args[this.skinName].complete
            ) {
              c = args[this.skinName];
            }
          }
        }
        c = (e = c) ? -1 != related_node_ids.indexOf(this.skinName) : false;
        if (!b) {
          ctx.stroke();
        }
        ctx.fill();
        if (!(null == e || c) && gl.hasOwnProperty(e.src)) {
          ctx.save();
          ctx.clip();
          ctx.drawImage(
            e,
            this.x - this.size,
            this.y - this.size,
            2 * this.size,
            2 * this.size
          );
          ctx.restore();
        }
        if ((showColor || 15 < this.size) && !b) {
          ctx.strokeStyle = "#000000";
          ctx.globalAlpha *= 0.1;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        if (null != e && c && gl.hasOwnProperty(e.src)) {
          ctx.drawImage(
            e,
            this.x - 2 * this.size,
            this.y - 2 * this.size,
            4 * this.size,
            4 * this.size
          );
        }
        c = -1 != playerCells.indexOf(this);
        if (0 != this.id) {
          if ((showName || c) && this.name) {
            if (this.pID == targetRowId) {
              ctx.fillStyle = "#FFFFFF";
            } else {
              var final_builtins = merge(this.pID);
              if (final_builtins == null) {
                ctx.fillStyle = "#FFFFFF";
              } else {
                if (final_builtins.sameTeam == 1) {
                  ctx.fillStyle = oGradient;
                } else {
                  if (final_builtins.sameClan == 1) {
                    ctx.fillStyle = color;
                  } else {
                    ctx.fillStyle = "#FFFFFF";
                  }
                }
              }
            }
            ctx.font = this.getNameSize() + "px Ubuntu";
            this.calcNameWidth(ctx);
            var dx = this.x - this.nameWidth * 0.5;
            ctx.fillText(this.name, dx, this.y);
          }
          if (isEnabled == true && this.size > 35 && this.isVirus == false) {
            if (this.pID == targetRowId) {
              ctx.fillStyle = "#FFFFFF";
            } else {
              final_builtins = merge(this.pID);
              if (final_builtins == null) {
                ctx.fillStyle = "#FFFFFF";
              } else {
                if (final_builtins.sameTeam == 1) {
                  ctx.fillStyle = oGradient;
                } else {
                  if (final_builtins.sameClan == 1) {
                    ctx.fillStyle = color;
                  } else {
                    ctx.fillStyle = "#FFFFFF";
                  }
                }
              }
            }
            ctx.font = this.getNameSize() + "px Ubuntu";
            var currentScore = this.getScore();
            var value = currentScore.dotFormat();
            dx = this.x - this.scoreWidth * 0.5;
            ctx.fillText(value, dx, this.y + this.getNameSize());
          }
          if (that != null) {
            if (that.pid == this.pID) {
              ctx.fillStyle = "#FF0000";
              ctx.font = this.getNameSize() + "px Ubuntu";
              value = that.uid;
              var radius = ctx.measureText(value).width;
              dx = this.x - radius * 0.5;
              ctx.fillText(value, dx, this.y - this.getNameSize());
            }
          }
        }
        ctx.restore();
      }
    },
  };
  if (!Date.now) {
    Date.now = function () {
      return new Date().getTime();
    };
  }
  var Quad = {
    init: function factory(args) {
      function Node(x, y, h, w, d) {
        this.x = x;
        this.y = y;
        this.w = h;
        this.h = w;
        this.depth = d;
        this.items = [];
        this.nodes = [];
      }
      var c = args.maxChildren || 2;
      var d = args.maxDepth || 4;
      Node.prototype = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        depth: 0,
        items: null,
        nodes: null,
        exists: function load(selector) {
          var i = 0;
          for (; i < this.items.length; ++i) {
            var item = this.items[i];
            if (
              item.x >= selector.x &&
              item.y >= selector.y &&
              item.x < selector.x + selector.w &&
              item.y < selector.y + selector.h
            ) {
              return true;
            }
          }
          if (0 != this.nodes.length) {
            var json = this;
            return this.findOverlappingNodes(selector, function (dir) {
              return json.nodes[dir].exists(selector);
            });
          }
          return false;
        },
        retrieve: function show(item, callback) {
          var i = 0;
          for (; i < this.items.length; ++i) {
            callback(this.items[i]);
          }
          if (0 != this.nodes.length) {
            var visData = this;
            this.findOverlappingNodes(item, function (index) {
              visData.nodes[index].retrieve(item, callback);
            });
          }
        },
        insert: function insert(a) {
          if (0 != this.nodes.length) {
            this.nodes[this.findInsertNode(a)].insert(a);
          } else {
            if (this.items.length >= c && this.depth < d) {
              this.devide();
              this.nodes[this.findInsertNode(a)].insert(a);
            } else {
              this.items.push(a);
            }
          }
        },
        findInsertNode: function copyBySelection(rect) {
          return rect.x < this.x + this.w / 2
            ? rect.y < this.y + this.h / 2
              ? 0
              : 2
            : rect.y < this.y + this.h / 2
            ? 1
            : 3;
        },
        findOverlappingNodes: function move(a, shift) {
          return (a.x < this.x + this.w / 2 &&
            ((a.y < this.y + this.h / 2 && shift(0)) ||
              (a.y >= this.y + this.h / 2 && shift(2)))) ||
            (a.x >= this.x + this.w / 2 &&
              ((a.y < this.y + this.h / 2 && shift(1)) ||
                (a.y >= this.y + this.h / 2 && shift(3))))
            ? !![]
            : false;
        },
        devide: function copyByShape() {
          var a = this.depth + 1;
          var c = this.w / 2;
          var d = this.h / 2;
          this.nodes.push(new Node(this.x, this.y, c, d, a));
          this.nodes.push(new Node(this.x + c, this.y, c, d, a));
          this.nodes.push(new Node(this.x, this.y + d, c, d, a));
          this.nodes.push(new Node(this.x + c, this.y + d, c, d, a));
          a = this.items;
          this.items = [];
          c = 0;
          for (; c < a.length; c++) {
            this.insert(a[c]);
          }
        },
        clear: function clear() {
          var i = 0;
          for (; i < this.nodes.length; i++) {
            this.nodes[i].clear();
          }
          this.items.length = 0;
          this.nodes.length = 0;
        },
      };
      var internalSelector = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
      };
      return {
        root: new Node(
          args.minX,
          args.minY,
          args.maxX - args.minX,
          args.maxY - args.minY,
          0
        ),
        insert: function insert(link) {
          this.root.insert(link);
        },
        retrieve: function remove(a, cb) {
          this.root.retrieve(a, cb);
        },
        retrieve2: function insert(a, b, c, d, cb) {
          internalSelector.x = a;
          internalSelector.y = b;
          internalSelector.w = c;
          internalSelector.h = d;
          this.root.retrieve(internalSelector, cb);
        },
        exists: function find(selector) {
          return this.root.exists(selector);
        },
        clear: function clear() {
          this.root.clear();
        },
      };
    },
  };
  wHandle.getPlayerList = function () {
    reset(40);
  };
  wHandle.st300 = function () {
    reset(44);
  };
  wHandle.onload = init;
})(window, window.jQuery);
