import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <h4>Form Survey</h4>
        <form onSubmit={this.props.handleSubmit(e => console.log(e))}>
          <Field type='text' name='surveyTitle' component={'input'} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'SurveyForm'
})(SurveyForm);
