import { actionTypes } from '../actions';

const initialState = [
    {
        id: 23316133,
        name: 'ASDayPicker',
        description: 'iOS day picker that resembles Calendar.app\'s week view',
        url: 'https://api.github.com/repos/appscape/ASDayPicker',
        stars: 126,
        language: 'Objective-C'
    },
    {
        id: 23316134,
        name: 'TestData',
        description: 'Redux template',
        url: 'https://api.github.com/repos/appscape/ASDayPicker',
        stars: 333,
        language: 'Javascript'
    }
];

const results = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SEARCH_SUCCEEDED:
            return action.result;
        default:
            return state;
    }
};

export default results;
