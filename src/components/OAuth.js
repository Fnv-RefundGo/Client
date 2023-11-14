// import {useEffect} from "react";
// import * as PropTypes from "prop-types";
//
// function Oabox(props) {
//     return null;
// }
//
// Oabox.propTypes = {children: PropTypes.node};
// const OAuth = () => {
//     const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 추출
//
//     useEffect(() => {
//         fetch(`/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json;",
//             },
//         });
//     }, []);
//
//     return <Oabox>카카오 인가코드 받아서 넘기고 토큰 받아오는 과정</Oabox>;
// };
// export default OAuth;