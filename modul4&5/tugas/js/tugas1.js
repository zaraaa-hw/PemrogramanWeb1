const dataAcount = {
    username: "admin",
    password: "123",
};
  
  const handleForm = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    if (username === dataAcount.username && password === dataAcount.password) {
      alert("Login Sukses");
      window.location.href = "/tugas/formLogin/index.html"
    } else {
      alert("Login Gagal");
      window.location.href = "/tugas/formLogin/login.html"
    }
  };
  