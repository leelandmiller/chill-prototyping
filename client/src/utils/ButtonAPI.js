import axios from 'axios';

const ButtonAPI = {
    getButtonState: function() {
        return axios.get('/api/press');
    },
    changeButtonState: function(pressed) {
        return axios.put('/api/press', { pressed });
    }
}

export default ButtonAPI;
