import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostCreate extends Component {
  renderField(field) {
    console.log(field);
    const { meta : { touched, active, error} } = field;
    const errorMessage = touched && !active && error;
    const fieldClass = `form-group ${errorMessage ? 'has-danger' : ''}`;

    return (
      <div className={fieldClass}>
        <label className="form-control-label" htmlFor={field.name}>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          placeholder={field.placeholder}
          id={field.name}
          {...field.input}
        />
        <div className="text-help">{errorMessage}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log('vals', values);
    this.props.createPost(values, () => this.props.history.push('/'));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
        <Field
          name="title"
          label="Title"
          placeholder="Title"
          type="text"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Tags"
          placeholder="Tags"
          type="text"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Content"
          placeholder="Content"
          type="text"
          component={this.renderField}
        />
        <div>
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
          <button type="button" disabled={pristine || submitting} className="btn btn-warning clear-value" onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  };
}

function validate(values) {
  console.log('values', values);
  const errors = {};

  if (!values.title) errors.title = 'Enter a title!';
  if (!values.categories) errors.categories = 'Enter some categories!';
  if (!values.content) errors.content = 'Enter some content!';

  return errors;
}

export default reduxForm({
  validate,
  form: 'postCreate' // a unique identifier for this form
})(
  connect(null, { createPost })(PostCreate)
);