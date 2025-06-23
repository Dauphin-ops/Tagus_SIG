import { Dropdown } from 'react-bootstrap';

export default function OptionMenu() {
  const handleSelect = (eventKey) => {
    if (eventKey === "dark") {
      document.body.classList.add('bg-dark', 'text-white');
    } else if (eventKey === "light") {
      document.body.classList.remove('bg-dark', 'text-white');
    }
    alert(`Option choisie : ${eventKey}`);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-options">
        ⚙️ Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="profile">Mon profil</Dropdown.Item>
        <Dropdown.Item eventKey="settings">Paramètres</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="dark">Thème sombre</Dropdown.Item>
        <Dropdown.Item eventKey="light">Thème clair</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
