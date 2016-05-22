var React = require('react');
var ReactDOM = require('react-dom');

var ProfileLink = function (props) {
  return <a href={'http://instagram.com/'+ props.username}> {props.username} </a>
};

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileLink username={this.props.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar username="agustin.gerald"/>,
  document.getElementById('avatar')
)
