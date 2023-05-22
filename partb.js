document.getElementById('signin-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var payload = {
      email: email,
      password: password
    };

    try {
      var response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        var data = await response.json();
        console.log(data); 
        document.getElementById('signin-form').reset();
      } else {
        throw new Error('Error: ' + response.status);
      }
    } catch (error) {
      console.error(error); 
    }
  });