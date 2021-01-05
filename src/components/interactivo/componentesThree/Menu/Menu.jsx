import React from "react";
import Nav from "react-bootstrap/Nav";

export  const Menu = ({
  items,
  onMarkerClicked,
  onTitleClicked,
}) => {
  return (
    <div className="ui">
      <h2 className="title" onClick={() => onTitleClicked()}>
        Nombre del proyecto
      </h2>
      <Nav defaultActiveKey="/home" className="flex-column">
        {items.map((marker) => {
          let key = items.indexOf(marker);
          let id =  1;
          return (
            <Nav.Link
              onClick={() => onMarkerClicked(id)}
              key={key}
            >
              {marker.name}
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
}

