import { connect } from 'react-redux';
import getFilteredResults from '../selectors';
import SearchList from '../components/SearchList';

const mapStateToProps = state => (
    {
        status: state.status,
        results: getFilteredResults(state)
    }
);

const SearchListContainer = connect(
    mapStateToProps
)(SearchList);

export default SearchListContainer;
