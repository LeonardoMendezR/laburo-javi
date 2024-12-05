function handleLogin(event) {
  
    event.preventDefault();
  
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const validUser = 'usuario';
    const validPassword = 'contrasena';
  
    
    if (username === validUser && password === validPassword) {
      alert('¡Inicio de sesión exitoso!');
   
      window.location.href = `../index.html?user=${encodeURIComponent(username)}`;
    } else {
      alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
}
  