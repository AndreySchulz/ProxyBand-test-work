import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { allUsers } from 'redux/usersSelectors';
import { albomsIdApi } from 'utils/fetchApi';

import {
  UsersList,
  UsersItem,
  Btn,
  LinkBtn,
  BtnBox,
  UserInfoBox,
} from './UserInfo.styled';

const UserInfo = () => {
  const usersData = useSelector(allUsers);
  const location = useLocation();

  const [modalData, setModalData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setModalData([]);
  };

  const openModal = e => {
    setIsOpen(true);

    albomsIdApi(e.target.id).then(data => setModalData(data));
  };

  return (
    <>
      <UsersList>
        {usersData.map(user => {
          const { id, name, phone, username } = user;
          return (
            <UsersItem key={id}>
              <UserInfoBox>
                <li>
                  <h2>{name}</h2>
                </li>
                <li>Username - {username}</li>
                <li>Phone - {phone}</li>
              </UserInfoBox>

              <BtnBox>
                <Btn>
                  <LinkBtn state={location} to={`/posts/${id}`}>
                    Пости
                  </LinkBtn>
                </Btn>
                <Btn id={id} type="button" onClick={openModal}>
                  Альбоми
                </Btn>
              </BtnBox>
            </UsersItem>
          );
        })}
      </UsersList>
      {isOpen && <Modal modalData={modalData} closeModal={closeModal} />}
    </>
  );
};

export default UserInfo;
