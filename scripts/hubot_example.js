module.exports = function (mybot) {
  mybot.hear(/give me (\w+)/, function (msg) {
    console.log(msg);
    var want = msg.match[1];
    msg.send("Yes ".concat(process.env.USER, ". Making ", want));
  });
};
