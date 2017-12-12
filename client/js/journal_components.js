class JournalBox extends React.Component {
  render() {
    return(
      <div>
        {/*Filter bar*/}
        <div class="container w-75 mx-auto">
          <JournalFilterForm />
        </div>

        {/*Journal List*/}
        <JournalList />

        {/*Floating Button*/}
        <div class="btn-group">
            <button type="button" id="addEntry" class="btn btn-warning btn-fab pmd-btn-fab pmd-btn-raised " data-toggle="modal" data-target="#myModal">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>

        {/*Add Entry Modal*/}
        <JournalAddEntryModal />

        {/*Open Entry Modal*/}
        <JournalOpenEntryModal />

      </div>
    );
  }
}

class JournalFilterForm extends React.Component {
  render() {
    return(
      <form>
          <div class="form-row">
              <label class="col-md-2 col-sm-2" for="select_month">Filter By:</label>
              <select class="form-control col-md-2 col-sm-2" id="select_month">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
              </select>
              <select class="form-control col-md-2 col-sm-2 ml-2" id="select_year">
                  <option>2017</option>
              </select>
          </div>
      </form>
    );
  }
}

class JournalAddEntryModal extends React.Component {
  render() {
    return(
      <div class="modal " id="addEntryModal">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">November 17, 2017</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <JournalAddForm/>
                  </div>
                  <div class="modal-footer">
                      <button type="submit" class="btn btn-primary closeModal">Save</button>
                      <button type="button" class="btn btn-secondary closeModal" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

class JournalAddForm extends React.Component {

  render() {
    return(
      <form id="new-entry" className="" action="index.html" method="post">
          <div className="form-group">
              <label htmlFor="entryTitle">Title</label>
              <input type="text" class="form-control" id="entryTitle" placeholder="My Entry" name="title"/>
          </div>

          <div className="form-group">
              <label htmlFor="newEntry">Journal Entry</label>
              <textarea className="form-control" rows="5" id="newEntry" name="body"></textarea>
          </div>

          <div className="form-group">
              <label htmlFor="select_category">Category</label>
              <select className="form-control " id="select_category" name="category">
                  <option>Thoughts</option>
                  <option>Travel</option>
                  <option>School</option>
                  <option>Love</option>
                  <option>Friends</option>
                  <option>Notes</option>
                  <option>Others</option>
              </select>
          </div>
      </form>
    );
  }
}

class JournalOpenEntryModal extends React.Component {
  render() {
    return(
      <div class="modal modal-ku" id="viewEntry">
          <div class="modal-dialog" role="document">
              <div class="modal-content ">
                  <div class="modal-header">
                      <h5 class="modal-title">This is Untitled.</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <JournalOpenForm/>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary closeModal">Save</button>
                      <button type="button" class="btn btn-secondary closeModal" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

class JournalOpenForm extends React.Component {
  render() {
    return(
      <form>
          <div class="row form-group">
              <div class="col-sm-2 text-sm-left">
                  <label for="select_category">Category</label>
              </div>
              <div class="col-md-5">
                  <select class="form-control col-sm-7" id="select_category">
                      <option>Thoughts</option>
                      <option>Travel</option>
                      <option>School</option>
                      <option>Love</option>
                      <option>Friends</option>
                      <option>Notes</option>
                      <option>Others</option>
                  </select>
              </div>
              <div class="col-sm-4 text-sm-right">November 17, 2017</div>
            </div>
          <div class="form-group">
              <label for="editEntry">Body</label>
              <textarea class="form-control edit-body" rows="10" id="editEntry">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam tempor vestibulum. Curabitur vel purus ac nisi rutrum bibendum. Mauris nisl sapien, ornare eu maximus quis , porta sed est. Fusce ut tortor ac dolor tempor interdum quis sit amet odio. Integer rhoncus eleifend lorem non tempor. Integer tristique, ante non gravida bibendum, magna turpis sollicitudin arcu, ut viverra felis magna et erat. Nunc ultrices augue in venenatis elementum.
              </textarea>
          </div>
      </form>
    );
  }
}

class JournalList extends React.Component {
  render() {
    return(
      <div className="card">
        <ul className="list-group list-group-flush">
          <Journal />
          <Journal />
        </ul>
      </div>
    );
  }
}



class Journal extends React.Component {
  render() {
    return(
      <li className="list-group-item">
        <div className="card w-50 mx-auto mt-4 shadowed ">
            <h3 className="card-header mt-0">
            Date Entry
            </h3>
            <div className="row ml-2 mr-2">
                <div className="col-sm-6 mt-2 text-sm-left">Category</div>
                <div className="col-sm-6 mt-2 text-sm-right">November 17, 2017</div>
            </div>
            <div className="card-block m-3">
                <h5 className="card-text font-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam tempor vestibulum. Curabitur vel purus ac nisi rutrum bibendum. Mauris nisl sapien, ornare eu maximus quis , porta sed est. Fusce ut tortor ac dolor tempor interdum quis sit amet odio. Integer rhoncus eleifend lorem non tempor. Integer tristique, ante non gravida bibendum, magna turpis sollicitudin arcu, ut viverra felis magna et erat. Nunc ultrices augue in venenatis elementum.  </h5>
            </div>
        </div>
      </li>
    );
  }
}

ReactDOM.render( <JournalBox />, document.getElementById("journal_box"));
