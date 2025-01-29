import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../../features/users/usersSlice';
import { toast } from 'react-toastify';
import { FiEdit2, FiTrash2, FiSave, FiX } from 'react-icons/fi';
import '../../styles/UserList.css';

const UserList = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = [...users].reverse().slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success('User deleted successfully!');
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditForm(user);
  };

  const handleUpdate = () => {
    dispatch(updateUser(editForm));
    setEditingId(null);
    toast.success('User updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleInputChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="table-responsive">
      <table className="user-table">
        <thead>
          <tr className="table-header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Company</th>
            <th>Telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map(user => (
            <tr key={user.id} className="table-row">
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    name="firstName"
                    value={editForm.firstName}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    name="lastName"
                    value={editForm.lastName}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    name="address"
                    value={editForm.address}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  user.address
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    name="company"
                    value={editForm.company}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  user.company
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    name="telephone"
                    value={editForm.telephone}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  user.telephone
                )}
              </td>
              <td>
                <div className="action-buttons">
                  {editingId === user.id ? (
                    <>
                      <button
                        onClick={handleUpdate}
                        className="save-button"
                      >
                        <FiSave />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="cancel-button"
                      >
                        <FiX />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(user)}
                        className="edit-button"
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="delete-button"
                      >
                        <FiTrash2 />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button 
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        
        <button 
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;