function sendEmail() { 
          Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "ivanaanime@gmail.com", 
            Password: "BlackRose007.gmail.com", 
            To: "kfee.support@yopmail.com", 
            From: document.getElementById('email').value, 
            Subject: "Contact from Kfee website", 
            Body: document.getElementById('textarea').value, 
          }) 
            .then(function (message) { 
              alert("Mail has been sent successfully") 
            }); 
} 