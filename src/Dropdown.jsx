import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="">
      <Dropdown.Item href="#/action-1">All</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Completed</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Not Completed</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;