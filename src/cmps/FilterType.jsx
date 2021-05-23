// import React, { useState, useEffect, useMemo } from 'react'
// export const Search = () => {

//     const [filter, setFilter] = useState(filterList[
//         {
//             id: 11,
//             name: "Part Time",
//             value: "PART_TIME"
//         },
//         {
//             id: 12,
//             name: "Full Time",
//             value: "FULL_TIME"
//         },
//         {
//             id: 13,
//             name: "Freelancer",
//             value: "FREELANCER"
//         }
//     ],
//         searchLists[
//         {
//             id: 1,
//             type: "PART_TIME",
//             name: "Akash",
//             location: "bangalore",
//             experience: 1
//         },
//         {
//             id: 2,
//             type: "PART_TIME",
//             name: "feroz",
//             location: "mumbai",
//             experience: 3
//         },
//         {
//             id: 3,
//             type: "FULL_TIME",
//             name: "Farheen",
//             location: "agra",
//             experience: 5
//         },
//         {
//             id: 4,
//             type: "FREELANCER",
//             name: "Raju",
//             location: "chennai",
//             experience: 6
//         },
//         {
//             id: 5,
//             type: "FULL_TIME",
//             name: "Asif",
//             location: "vegas",
//             experience: 7
//         }
//         ])
// const [activeFilter, setActiveFilter] = useState([])
// useEffect(() => {
//     onFilterChange()

// })
// function onFilterChange(filter) {
//     // const { filterList, activeFilter } = this.state;
//     if (filter === "ALL") {
//         if (setActiveFilter.length === filterList.length) {
//             setFilter({ activeFilter: [] });
//         } else {
//             setFilter({ activeFilter: filterList.map(filter => filter.value) });
//         }
//     } else {
//         if (activeFilter.includes(filter)) {
//             const filterIndex = activeFilter.indexOf(filter);
//             const newFilter = [...activeFilter];
//             newFilter.splice(filterIndex, 1);
//             setFilter({ activeFilter: newFilter });
//         } else {
//             setFilter({ activeFilter: [...activeFilter, filter] });
//         }
//     }


//     render()
//     const { filterInfo, activeFilter } = this.state;
//     let filteredList;
//     if (
//         activeFilter.length === 0 ||
//         activeFilter.length === filterInfo.length
//     ) {
//         filteredList = this.state.searchLists;
//     } else {
//         filteredList = this.state.searchLists.filter(item =>
//             this.state.activeFilter.includes(item.type)
//         );
//     }
//     return (
//         <div className="searchContainer">
//             <form>
//                 <label htmlFor="myInput">All</label>
//                 <input
//                     id="myInput"
//                     type="checkbox"
//                     onClick={() => this.onFilterChange("ALL")}
//                     checked={activeFilter.length === filterList.length}
//                 />
//                 {this.state.filterList.map(filter => (
//                     <React.Fragment>
//                         <label htmlFor={filter.id}>{filter.name}</label>
//                         <input
//                             id={filter.id}
//                             type="checkbox"
//                             checked={activeFilter.includes(filter.value)}
//                             onClick={() => this.onFilterChange(filter.value)}
//                         />
//                     </React.Fragment>
//                 ))}
//             </form>
//             <ul style={{ marginLeft: "70px" }}>
//                 {filteredList.map(item => (
//                     <div key={item.id}>
//                         <li>
//                             {item.name} -- {item.type}
//                         </li>
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// }
// // export default Search
