class JournalList extends React.Component {
  render() {
    return(
      <div className="card">
        <ul className="list-group list-group-flush">
          <Meeting/>
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

ReactDOM.render( <Journal />, document.getElementById("journal_list"));
