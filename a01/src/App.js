import { connect } from 'react-redux';
import { setTitle } from './components/Store';

function App(props) {
  const func = () => {
    props.setTitle();
  }
  return (
    <>
    <h1>{props.title}</h1>
    <button onClick={func}>button</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
  }
}
export default connect(mapStateToProps, { setTitle })(App);
