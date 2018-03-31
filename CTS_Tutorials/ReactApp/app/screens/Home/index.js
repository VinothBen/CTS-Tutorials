import React, { Component } from 'react';
import Ajax from './app/screens/Home/Ajax';

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({ pathname: `/${this._input.value}` });
  }

  render() {
    return (
      <section className="container home">
        <form
          className="form-inline"
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter a GitHub user..."
                className="form-control"
                ref={ref => (this._input = ref)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-info">
            Go
          </button>
        </form>
        <div><Ajax /></div>
      </section>
    );
  }
}
Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
