import './App.css';
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';
function App() {
  return(
    <div className="App">
      <h1>Registration Form</h1>
      <RegistrationForm />
      <formikForm />
    </div>
  );
}
export default App;

