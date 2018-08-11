import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Input from '../Input.js'
import { connect } from 'react-redux';

export class AdminScore extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <form>
                    <Field type="text"
          component={Input}
          name='teamName'
          // validate={[required, nonEmpty]}
           />

        



      </form>
    );
  }
}

const mapStateToProps = (main) => ({
});

AdminScore = connect(
    mapStateToProps
)(AdminScore);

export default reduxForm({
  form: 'AdminScore' // a unique identifier for this form
})(AdminScore)
