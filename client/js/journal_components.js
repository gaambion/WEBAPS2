
class JournalBox extends React.Component {

  constructor() {
    super();

    this.state = {
      journals: []
    }
  }

  componentWillMount() {
      console.log("Fetching Journals");
      let results;
      fetch("http://localhost:3000/api/getJournal")
      .then(res => res.json())
      .then(
        (result) => {
            console.log("result");
            console.log(result);
            results = result;
            console.log(JSON.stringify(result));
            this.setState({journals: result});
            console.log(this.state.journals);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log(this.state.journals);
      console.log("Done");

    //this._fetchJournals();
  }

  render() {
    return(
      <div>
        {/*Filter bar*/}
        <JournalFilterForm />

        {/*Journal List*/}
        <JournalList journals={this.state.journals}/>

        {/*Floating Button*/}
        <div className="btn-group">
            <button type="button" id="addEntry" className="btn btn-warning btn-fab pmd-btn-fab pmd-btn-raised " data-toggle="modal" data-target="#addEntryModal">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>

        {/*Add Entry Modal*/}
        <JournalAddEntryModal addJournal={this._addJournal.bind(this)}/>

        {/*Open Entry Modal*/}
        <JournalOpenEntryModal />

      </div>
    );
  }

  _addJournal(journal) {
    journal.id = this.state.journals.length + 1;
    this.setState({
      journals: this.state.journals.concat([journal])
    });
  }

  _fetchJournals() {

    this.state.journals = [
      {
        "id": "1",
        "title": "My Journal Title 1",
        "entry": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam tempor vestibulum. Curabitur vel purus ac nisi rutrum bibendum. Mauris nisl sapien, ornare eu maximus quis , porta sed est. Fusce ut tortor ac dolor tempor interdum quis sit amet odio. Integer rhoncus eleifend lorem non tempor. Integer tristique, ante non gravida bibendum, magna turpis sollicitudin arcu, ut viverra felis magna et erat. Nunc ultrices augue in venenatis elementum.",
        "category": "Travel"
      },
      {
        "id": "2",
        "title": "My Journal Title 2",
        "entry": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam tempor vestibulum. Curabitur vel purus ac nisi rutrum bibendum. Mauris nisl sapien, ornare eu maximus quis , porta sed est. Fusce ut tortor ac dolor tempor interdum quis sit amet odio. Integer rhoncus eleifend lorem non tempor. Integer tristique, ante non gravida bibendum, magna turpis sollicitudin arcu, ut viverra felis magna et erat. Nunc ultrices augue in venenatis elementum.",
        "category": "Travel"
      }
    ]
  }
}

class JournalFilterForm extends React.Component {
  render() {
    return(
      <div className="container w-75 mx-auto">
        <form>
            <div className="form-row mt-5">
                <label className="col-md-2 col-sm-2" htmlFor="select_month">Filter By:</label>
                <select className="form-control col-md-2 col-sm-2" id="select_month">
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
                <select className="form-control col-md-2 col-sm-2 ml-2" id="select_year">
                    <option>2017</option>
                </select>
            </div>
        </form>
      </div>
    );
  }
}

class JournalAddEntryModal extends React.Component {

  constructor() {
      console.log("NEW JOURNAL ENTRY MODAL");
    super();
  }

  render() {
      console.log("RENDER JOURNAL ENTRY MODAL");
    return(
      <div class="modal fade" id="addEntryModal" tabindex="-1" role="dialog" aria-labelledby="AddEntryModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                    <form id="new-entry" className="" action="index.html" method="post">
                        <div className="form-group">
                            <label htmlFor="entryTitle">Title</label>
                            <input type="text" className="form-control" id="entryTitle" placeholder="My Entry" name="title"
                              ref={(input) => this._title = input}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="newEntry">Journal Entry</label>
                            <textarea className="form-control" rows="5" id="newEntry" name="body"
                              ref={(textarea) => this._entry = textarea}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="select_category">Category</label>
                            <select className="form-control " id="select_category" name="category"
                              ref={(select) => this._category = select}>
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
                  </div>
                  <div className="modal-footer">
                      <button type="submit" className="btn btn-primary closeModal"
                        onClick={this._handleClick.bind(this)}>Save</button>
                      <button type="button" className="btn btn-secondary closeModal" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  _handleClick(e) {
    e.preventDefault();

    let journal = {
      title: this._title.value,
      entry: this._entry.value,
      category: this._category.value
    }

    this.props.addJournal(journal);

    console.log("title: " + this._title.value);
    console.log("entry: " + this._entry.value);
    console.log("category: " + this._category.value);

    fetch('http://localhost:3000/api/newJournal', {
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(journal)
        })
    }
}

class JournalOpenEntryModal extends React.Component {
  render() {
    return(
      <div class="modal modal-ku fade" id="viewEntry" tabindex="-1" role="dialog" aria-labelledby="ViewEntryModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content ">
                  <div className="modal-header">
                      <h5 className="modal-title">This is Untitled.</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                    <form>
                        <div className="row form-group">
                            <div className="col-sm-2 text-sm-left">
                                <label htmlFor="select_category">Category</label>
                            </div>
                            <div className="col-md-5">
                                <select className="form-control col-sm-7" id="select_category">
                                    <option>Thoughts</option>
                                    <option>Travel</option>
                                    <option>School</option>
                                    <option>Love</option>
                                    <option>Friends</option>
                                    <option>Notes</option>
                                    <option>Others</option>
                                </select>
                            </div>
                          </div>
                        <div className="form-group">
                            <label htmlFor="editEntry">Body</label>
                            <textarea className="form-control edit-body" rows="10" id="editEntry">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam tempor vestibulum. Curabitur vel purus ac nisi rutrum bibendum. Mauris nisl sapien, ornare eu maximus quis , porta sed est. Fusce ut tortor ac dolor tempor interdum quis sit amet odio. Integer rhoncus eleifend lorem non tempor. Integer tristique, ante non gravida bibendum, magna turpis sollicitudin arcu, ut viverra felis magna et erat. Nunc ultrices augue in venenatis elementum.
                            </textarea>
                        </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary closeModal">Save</button>
                      <button type="button" className="btn btn-secondary closeModal" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

class JournalList extends React.Component {
  render() {

    let journals = this._getJournals();


    return(
      <div className="card">
        <ul className="list-group list-group-flush">
          {journals.map((journal) =>
            <Journal
              key={journal.id}
              title={journal.title}
              category={journal.category}
              entry={journal.entry} />
          )}
        </ul>
      </div>
    );
  }

  _getJournals() {
    return this.props.journals;
  }
}



class Journal extends React.Component {
  render() {
    return(
      <li className="list-group-item">
        <div class="card shadowed w-60" data-toggle="modal" data-target="#viewEntry">
            <h3 className="card-header mt-0">
            {this.props.title}
            </h3>
            <div className="row ml-2 mr-2">
                <div className="col-sm-6 mt-2 text-sm-left">{this.props.category}</div>
            </div>
            <div className="card-block m-3">
                <h5 className="card-text font-weight-normal">{this.props.entry}</h5>
            </div>
        </div>
      </li>
    );
  }
}

ReactDOM.render( <JournalBox />, document.getElementById("journal_box"));
