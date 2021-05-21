import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { If } from 'react-if';

function Auth(props) {
  const contextType = useContext(AuthContext);
  let okToRender =
    contextType.loggedIn && props.capability
      ? contextType.user.capabilities.includes(props.capability)
      : false;

  return (
    <>
      <If condition={okToRender}>{props.children}</If>
      <If condition={props.capability === 'guest' && !contextType.loggedIn}>
        {props.children}
      </If>
    </>
  )
}
// const Auth = (props) => {
// 	const loginContext = useContext(AuthContext);
// 	let okToRender = false;
// 	try {
// 		okToRender =
// 			loginContext.loggedIn && props.capability
// 				? loginContext.user.capabilities.includes(props.capability)
// 				: false;
// 	} catch (error) {
// 		console.log('NOT AUTHORIZED', error.message);
// 	}
// 	return <If condition={okToRender}>{props.children}</If>;
// };
export default Auth;