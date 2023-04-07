import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function Swagger() {
  return (
    <div className="App">
      <SwaggerUI url="http://localhost:5173/docs" />
    </div>
  );
}
