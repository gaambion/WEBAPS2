class RegisterBox extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="blank col-12 hidden-sm-down"></div>
        </div>
        <div className="row">
          <div className="content logo col-md-6 col-sm-6 col-xs-2" >
            Quill
          </div> { /*content logo */}
          <div className="content form col-md-6 col-sm-6 col-xs-10">
            <form className="form-signin">
              <h2 className="form-signin-heading">Create an Account</h2>

              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />

              <label htmlFor="inputDisplayName" className="sr-only">Display Name</label>
              <input type="text" id="inputDisplayName" className="form-control" placeholder="Display Name" required />

              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

              <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
              <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required />

              <div className="formLink">
                <label>
                  Already have an account? Login
                  <a href="./index.html"> here</a>!
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
          </div> { /*content form */}
        </div>
      </div>
    );
  }
}

ReactDOM.render( <RegisterBox />, document.getElementById("root"));
