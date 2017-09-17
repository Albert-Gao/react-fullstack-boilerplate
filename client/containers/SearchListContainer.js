import { connect } from 'react-redux';
import SearchList from '../components/SearchList';

const mapStateToProps = ({ status, results }) => (
    { status, results }
);

const SearchListContainer = connect(mapStateToProps)(SearchList);

export default SearchListContainer;
