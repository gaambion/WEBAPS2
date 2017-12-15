class LoginBox extends React.Component {

  constructor() {
        super();

        this.state ={
            message: "",
            redirect: false
        }
    }

  render() {

    if(this.state.redirect) {
            return (
                <Redirect to="/journals.html" />
            );
        }

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
            <form className="form-signin" onSubmit={this._handleSubmit.bind(this)}>
              <h2 className="form-signin-heading">Login</h2>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" ref={(input) => this._email = input}
                  className="form-control" placeholder="Email address" required autoFocus />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" ref={(input) => this._password = input}
                  className="form-control" placeholder="Password" required />
              <div className="formLink">
                <label>
                  Dont have an account yet? Sign up
                  <a href="./register.html"> here</a>!
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
          </div> { /*content form */}
        </div>
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();

    let session = {
      email: this._email.value,
      password: this._password.value
    }

    $.ajax({
            type: "POST",
            url: "/api/session",
            data: session
        }).done((res, status, xhr) => {
            sessionStorage.setItem("token", xhr.getResponseHeader("Authorization"));
            this.setState({ redirect: true });
        }).fail((xhr) => {
            if(xhr.status == 401) {
                this._showLoginError("Invalid name or password.");
            }
        });
  }

  _showLoginError(error) {
        this.setState({
            message: error
        });

        alert(error);
    }

}

ReactDOM.render( <LoginBox />, document.getElementById("root"));
