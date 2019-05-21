import { connect } from 'react-redux';
import TotalAnimals from '../components/TotalAnimals';

const mapStateToProps = (state) => {
  return {
    animals: state
  };
};


export default connect(mapStateToProps)(TotalAnimals);
