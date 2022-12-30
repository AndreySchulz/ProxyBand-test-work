import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { postIdApi } from 'utils/fetchApi';

import { PostBox } from './UserPost.styled';

const UserPost = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  const location = useLocation();

  useEffect(() => {
    postIdApi(userId).then(data => setPosts(data));
  }, [userId]);

  return (
    <>
      <Link to={location.state || '/'}>Go back</Link>
      <ul>
        {posts.map(({ id, title, body }) => {
          return (
            <li key={id}>
              <PostBox>
                <h2>{title}</h2>
                <p>{body}</p>
              </PostBox>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UserPost;
