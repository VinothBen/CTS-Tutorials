import React from 'react';

export default class Ajax extends React.Component {
  constructor(props) {
    super(props);
    this.loadJSON = this.loadJSON.bind(this);
    this.state = {
    }
  }

  loadJSON(event) {
    event.preventDefault();
    console.log("Clicked!");
    var data_file = "http://localhost:8022/MyBatis/getall.json";
    var http_request = new XMLHttpRequest();
    try {

      http_request = new XMLHttpRequest();
    } catch (e) {

      try {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");

      } catch (e) {

        try {
          http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {

          alert("Your browser broke!");
          return false;
        }

      }
    }
    http_request.onreadystatechange = function () {

      if (http_request.readyState == 4) {
        var jsonObj = JSON.parse(http_request.responseText);
        console.log(jsonObj);
        document.getElementById("Name").innerHTML = jsonObj.name;
        document.getElementById("Country").innerHTML = jsonObj.id;
      }
    }

    http_request.open("GET", data_file, true);
    http_request.send();
  }


  render() {
    return (
      <section className="container home">
        <div>
          <h1>Details</h1>
          <table >
            <thead><tr><th>Name</th><th>Country</th></tr></thead>
            <tbody><tr>
              <td><div id="Name">Sachin</div></td>
              <td><div id="Country">India</div></td>
            </tr>
            </tbody>
          </table>

          <div>
            <button type="button" onClick={this.loadJSON}>Change! </button>
          </div>
        </div>
      </section>
    );
  }

}