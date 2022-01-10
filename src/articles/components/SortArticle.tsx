import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Sort({ older, newest }: { older: () => void; newest: () => void }) {
  return (
    <DropdownButton size="sm" variant="outline-secondary" title="Sort">
      <Dropdown.Item onClick={older}>Mais antigas</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={newest}>Mais novas</Dropdown.Item>
    </DropdownButton>
  );
}

export default Sort;
