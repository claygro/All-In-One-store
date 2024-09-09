import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="container2">
          <div className="login-container">
            <header className="myheader">Wellcome</header>
            <form action="###" className="my-form">
              <label htmlFor="email" className="labelemail">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                required
                className="inputEmail"
                style={{ outline: "none" }}
              />

              <label htmlFor="##" className="labelPassword">
                Password{" "}
              </label>
              <input
                type="password"
                required
                className="inputPassword"
                style={{ outline: "none" }}
              />

              <button className="login-btn">log in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
