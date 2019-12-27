import axios from 'axios';
import Urls from '../../urls'

export default {
  getUsers() {
    return axios.get(Urls.user.users.getUsers);
  }
}