import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UsersList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
export const UsersItem = styled.li`
  width: calc((100% - 2 * 30px) / 3);

  padding: 10px;
  text-align: center;
  background-color: #8080800a;
  outline: 1px solid rgb(0 0 0 / 10%);
`;
export const UserInfoBox = styled.ul`
  margin-bottom: 40px;
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Btn = styled.button`
  width: 130px;
  height: 32px;
  background-color: #03a9f491;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const LinkBtn = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: black;
`;
