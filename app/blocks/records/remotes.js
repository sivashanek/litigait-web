/*
 *
 *  remotes
 *
 */

import api from 'utils/api.js'

export default function (name, remotesBlock) {

    function loadRecords() {
      return api.get(`/${name}`).then((response) => response.data).catch((error) => Promise.reject(error));
    }
  
    function loadRecord() {
      return api.get(`/${name}`).then((response) => response.data).catch((error) => Promise.reject(error));
    }
  
    function createRecord(record) {
      return api.post(`/${name}`, record).then((response) => response.data).catch((error) => Promise.reject(error));
    }
  
    function updateRecord(record) {
      return api.put(`/${name}/${record.id}`, record).then((response) => response.data).catch((error) => Promise.reject(error));
    }
  
    function deleteRecord(id) {
      return api.delete(`/${name}/${id}`).catch((error) => Promise.reject(error));
    }
  
  
    return {
      loadRecords,
      loadRecord,
      createRecord,
      updateRecord,
      deleteRecord,
      ...remotesBlock
    }
  
  
  }