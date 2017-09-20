import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { showEnglishItems, showAllItems } from '../actions';

const mapDispatchToProps = dispatch => (
    {
        showAllItems: () => { dispatch(showAllItems()); },
        showEnglishItems: () => { dispatch(showEnglishItems()); }
    }
);

const FilterContainer = connect(
    null,
    mapDispatchToProps
)(Filter);

export default FilterContainer;
