import axios from 'axios';

const useAjax = (url) => {

  const _RESTItems = async (method, url, item) => {
    const result = await axios({
      method: method,
      url: url,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: item,
    });
    return result.data;
  };

  const _postItem = (item) => {
    _RESTItems('post', url, item);
  };

  const _deleteItem = (item) => {
    let extendedUrl = `${url}/${item._id}`;
    _RESTItems('delete', extendedUrl, item);
  };

  const _putItem = (item) => {
    item.complete = !item.complete;
    let extendedUrl = `${url}/${item._id}`;
    _RESTItems('put', extendedUrl, item);
  };

  const _getItems = () => {
      return _RESTItems('get', url);
  };

  return [_postItem, _deleteItem, _putItem, _getItems];
};

export default useAjax;
