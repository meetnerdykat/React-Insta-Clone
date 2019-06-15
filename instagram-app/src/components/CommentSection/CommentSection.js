import React, { Component } from 'react';
import Moment from 'react-moment';

class CommentSection extends Component {
  render() {
    return (
      <form className="border-0">
        <div className="form-group px-3">
          {this.props.comments.map(comment => (
            <div>
              <p className="m-0 pb-0">
                <span className="small font-weight-bold">
                  {comment.username}{' '}
                </span>
                <span className="small">{comment.text} </span>
              </p>
            </div>
          ))}
          <textarea
            className="form-control form-control-sm border-0"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Add a comment..."
          />
          <Moment className="ml-1 small text-muted" format="MMMM DD" />
        </div>
      </form>
    );
  }
}

export default CommentSection;
