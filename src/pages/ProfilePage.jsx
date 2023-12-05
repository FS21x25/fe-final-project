const ProfilePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <div className="room-daftar w-100 d-flex justify-content-center align-items-center">
        <form id="registration-form" onSubmit={() => daftarAkun()}>
          <label htmlFor="nama-lengkap">Nama Lengkap</label> <br />
          <input
            type="text"
            id="nama-lengkap"
            name="nama-lengkap"
            placeholder="Nama Lengkap"
            required
          />
          <br />
          <label htmlFor="pekerjaan">Pekerjaan</label> <br />
          <input
            type="text"
            id="pekerjaan"
            name="pekerjaan"
            placeholder="Pekerjaan"
            required
          />{" "}
          <br />
          <label htmlFor="asal-sekolah">Asal Sekolah</label> <br />
          <input
            type="text"
            id="asal-sekolah"
            name="asal-sekolah"
            placeholder="Asal Sekolah"
            required
          />
          <br />
          <label htmlFor="gmail-daftar">Gmail</label> <br />
          <input
            type="email"
            id="gmail-daftar"
            name="gmail-daftar"
            placeholder="Gmail"
            required
          />{" "}
          <br />
          <label htmlFor="no-hp">No Hp</label> <br />
          <input
            type="tel"
            id="no-hp"
            name="no-hp"
            placeholder="No Hp"
            required
          />{" "}
          <br />
          <label htmlFor="pass-daftar">Password</label> <br />
          <input
            type="password"
            id="pass-daftar"
            name="pass-daftar"
            placeholder="Password"
            required
          />{" "}
          <br />
          <label htmlFor="ulangipass">Ulangi Password</label> <br />
          <input
            type="password"
            id="ulangipass"
            name="ulangipass"
            placeholder="Ulangi Password"
            required
          />
          <br />
          <button type="submit" id="submit-daftar" style={{ width: "100%" }}>
            Edit
          </button>
        </form>
        <div id="notifikasi"></div>
      </div>
    </div>
  );
};

export default ProfilePage;