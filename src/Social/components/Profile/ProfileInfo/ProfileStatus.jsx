import React from 'react';
import style from './ProfileStatus.module.css';
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }
  render() {
    return (
      <>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
          </div>}
        {this.state.editMode &&
          <div>
            <input onBlur={this.deactivateEditMode} autoFocus className={style.input}
              value={this.state.status} onChange={this.onStatusChange}></input>
          </div>}
      </>
    )
  }

}


export default ProfileStatus