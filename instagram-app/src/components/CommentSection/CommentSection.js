import React, { Component } from 'react';

class CommentSection extends Component {
  render() {
    return (
      <form className="border-0">
        <div className="form-group px-3">
          <textarea
            className="form-control form-control-sm border-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Add a comment..."
          />
        </div>
      </form>
    );
  }
}

export default CommentSection;
