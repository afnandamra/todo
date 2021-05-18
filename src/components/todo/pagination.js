// import { useContext, useState } from 'react';
// import { Pagination } from 'react-bootstrap';
// import { PaginationContext } from '../../context/pagenation';

// const TodoPage = (props) => {
//   const context = useContext(PaginationContext);
//   const [currentPage, setCurrentPage] = useState(context.startingPage);
//   const maxItems = context.itemCount;
//   // sorting hard-coded according to difficulty
//   const sortedList = props.list.sort((a, b) => b.difficulty - a.difficulty);
//   // display completed items first
//   const allList = sortedList.sort((a, b) => {
//     return a.complete === b.complete ? 0 : a ? -1 : 1;
//   });

//   // logic
//   const numOfPages = allList.length / maxItems + 1;
//   const indexOfLastItem = currentPage * maxItems;
//   const indexOfFirstItem = indexOfLastItem - maxItems;
//   const currentList = allList.slice(indexOfFirstItem, indexOfLastItem);
//   const nextPage = (num) => setCurrentPage(num);

//   const pageNums = [];
//   const activePage = currentPage;
//   for (let num = 1; num < numOfPages; num++) {
//     pageNums.push(
//       <Pagination.Item
//         key={num}
//         acitvePage={num === activePage}
//         onClick={() => nextPage(num)}
//       >
//         {num}
//       </Pagination.Item>
//     );
//   }
//   // context.setDisplayList(props.list.slice(0, 3));
//   return (
//     <>
//       <Pagination>{pageNums}</Pagination>
//       <Pagination>
//         <Pagination.Prev
//           disabled={context.prevDisabled}
//           onClick={() => {
//             if (context.offset >= 3) {
//               context.setOffset(context.offset - context.itemsNum);
//               context.setPage(context.page - 1);
//               context.setDisplayList(
//                 props.list.slice(
//                   context.offset - context.itemsNum,
//                   context.offset
//                 )
//               );
//               context.setNextDisabled(false);
//             } else context.setPrevDisabled(true);
//           }}
//         />
//         <Pagination.Next
//           disabled={context.nextDisabled}
//           onClick={() => {
//             if (props.list.length >= context.offset) {
//               context.setOffset(context.offset + context.itemsNum);
//               context.setPage(context.page + 1);
//               context.setPrevDisabled(false);
//               context.setDisplayList(
//                 props.list.slice(
//                   context.offset,
//                   context.offset + context.itemsNum
//                 )
//               );
//             } else context.setNextDisabled(true);
//           }}
//         />
//       </Pagination>
//     </>
//   );
// };
// export default TodoPage;
