const dataUser = {
  username: "zahra",
  password: "123"
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Ambil nilai input dari form
  const username = e.target.username.value.trim();
  const password = e.target.password.value.trim();

  // Validasi username dan password
  if (username === dataUser.username && password === dataUser.password) {
    alert("Berhasil");
  } else {
    alert("Gagal");
  }
};
