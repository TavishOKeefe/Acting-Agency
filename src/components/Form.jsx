import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  let _name = null;
  let _age = null;
  let _height = null;
  let _weight = null;
  let _skills = null;

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewActorCreation({name: _name.value, age: _age.value, height: _height.value, weight: _weight.value, skills: _skills.value});
    _name.value = '';
    _age.value = '';
    _height.value = '';
    _weight.value = '';
    _skills.value = '';
  }


  return(
    <div>
      <form onSubmit={handleNewFormSubmission}>
        <input type="text" placeholder="Name..." ref={(input) => {_name = input;}}/>
        <input type="text" placeholder="Age..."ref={(input) => {_age = input;}}/>
        <input type="text" placeholder="Height..."ref={(input) => {_height = input;}}/>
        <input type="text" placeholder="Weight..."ref={(input) => {_weight = input;}}/>
        <input type="text-field" placeholder="Skills..."ref={(input) => {_skills = input;}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
Form.propTypes = {
  onNewActorCreation: PropTypes.func
};

export default Form;
