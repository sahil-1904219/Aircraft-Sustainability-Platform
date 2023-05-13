import { useHistory } from "react-router-dom";

function MyComponent() {
  const history = useHistory();

  // Prevent back navigation when the user clicks the browser's back button
  history.listen((location, action) => {
    if (action === "POP") {
      history.go(1);
    }
  });

  return <div>{/* your component content here */}</div>;
}

export default MyComponent;
