import React from 'react';
import Form from './form';
import PropTypes from 'prop-types';

function GetScouted(props){
  return(
    <div>
      <Form onNewActorCreation={props.onNewActorCreation}/>
    </div>
  );
}

GetScouted.propTypes = {
  onNewActorCreation: PropTypes.func
};

export default GetScouted;
