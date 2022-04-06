var require = require("email-templates").EmailTemplate;
var nodemailer = require("nodemailer");

var smtpTransport = require("nodemailer-smtp-transport");
var transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", //host of mail service provider
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMPT_MAIL,
    pass: process.env.SMPT_PASSWORD,
  },
});

function sendMail() {
  //create the path of email template folder
  var templateDir = path.join(
    __dirname,
    "../",
    "templates",
    "testMailTemplate"
  );

  var testMailTemplate = new EmailTemplate(templateDir);

  var locals = {
    userName: "XYZ", //dynamic data for bind into the template
  };

  testMailTemplate.render(locals, function (err, temp) {
    if (err) {
      console.log("error", err);
    } else {
      transporter.sendMail(
        {
          from: process.env.SMPT_MAIL,
          to: shippingInfo.email,
          subject: "VASAL CLOTHES SHOPPING",
          text: "done",
          html: temp.html,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          }
          console.log("Message sent: " + info.response);
        }
      );
    }
  });
}
