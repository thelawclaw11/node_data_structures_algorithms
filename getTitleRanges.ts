// // import { Page } from "@iarchives/page-dto/index";
// // import { TitleInfo } from "../indexer/inputs/TitleCache";
// import * as R from "remeda";
//
// type TitleRange = {
//     title_id: Page["title_id"];
//     startIndex: number;
//     startName: string;
//     endIndex?: number;
//     endName?: string;
//     info?: TitleInfo;
// };
//
// const isNewRange = (prevPage: TitleRange, currentPage: Page) => {
//     return (
//         (prevPage.title_id?.value || "") === (currentPage.title_id?.value || "") &&
//         prevPage.title_id?.title_research?.flag === currentPage.title_id?.title_research?.flag &&
//         (prevPage.title_id?.title_research?.catalog ===
//             currentPage.title_id?.title_research?.catalog ||
//             prevPage.title_id?.title_research?.lccn ===
//                 currentPage.title_id?.title_research?.lccn) &&
//         prevPage.title_id?.title_research?.placeholderTitle ===
//             currentPage.title_id?.title_research?.placeholderTitle
//     );
// };
//
// const getTitleRanges = (pages: Page[]) => {
//     const titleRanges: TitleRange[] = [];
//
//     pages.forEach((currentPage, index) => {
//         if (currentPage.trashed?.value) {
//             return;
//         }
//
//         const prevRange = titleRanges[titleRanges.length - 1];
//
//         if (
//             titleRanges.length > 0 &&
//             prevRange?.title_id?.value === currentPage?.title_id?.value &&
//             R.equals(prevRange.title_id?.title_research, currentPage?.title_id?.title_research)
//         ) {
//             prevRange.endName = currentPage.name;
//             prevRange.endIndex = index;
//             return;
//         }
//
//         titleRanges.push({
//             title_id: currentPage.title_id,
//             startIndex: index,
//             startName: currentPage.name,
//         });
//     });
//
//     // return titleRanges;
//
//     return pages.reduce((aggregator: TitleRange[], currentPage: Page, index: number) => {
//         if (currentPage.trashed?.value) {
//             return aggregator;
//         } // skip trashed pages
//
//         if (aggregator.length === 0) {
//             aggregator.push({
//                 title_id: currentPage.title_id,
//                 startIndex: index,
//                 startName: currentPage.name,
//             });
//         } else {
//             const prevPage = aggregator[aggregator.length - 1];
//             if (
//                 (prevPage.title_id?.value || "") === (currentPage.title_id?.value || "") &&
//                 prevPage.title_id?.title_research?.flag ===
//                     currentPage.title_id?.title_research?.flag &&
//                 prevPage.title_id?.title_research?.catalog ===
//                     currentPage.title_id?.title_research?.catalog &&
//                 prevPage.title_id?.title_research?.lccn ===
//                     currentPage.title_id?.title_research?.lccn &&
//                 prevPage.title_id?.title_research?.placeholderTitle ===
//                     currentPage.title_id?.title_research?.placeholderTitle
//             ) {
//                 prevPage.endName = currentPage.name;
//                 prevPage.endIndex = index;
//             } else {
//                 aggregator.push({
//                     title_id: currentPage.title_id,
//                     startIndex: index,
//                     startName: currentPage.name,
//                 });
//             }
//         }
//         return aggregator;
//     }, [] as TitleRange[]);
// };
//
// export default getTitleRanges;
//
// // [
// //     {
// //         title_id: {
// //             pinned: true,
// //             last_changed_by: "erichardson",
// //             value: 32086,
// //             last_changed_by_group: "TEAM_2",
// //         },
// //         startIndex: 1,
// //         startName: "0002",
// //         endName: "0060",
// //         endIndex: 100,
// //     },
// //     {
// //         title_id: {
// //             title_research: { catalog: "LCCN:sn90068379" },
// //             pinned: true,
// //             last_changed_by: "kbates",
// //             value: -1,
// //             last_changed_by_group: "TEAM_4",
// //         },
// //         startIndex: 101,
// //         startName: "0061",
// //         endName: "0326",
// //         endIndex: 622,
// //     },
// // ];
// //
// // [
// //     {
// //         title_id: {
// //             pinned: true,
// //             last_changed_by: 'erichardson',
// //             value: 32086,
// //             last_changed_by_group: 'TEAM_2'
// //         },
// //         startIndex: 1,
// //         startName: '0002',
// //         endName: '0060',
// //         endIndex: 100
// //     },
// //     {
// //         title_id: {
// //             title_research: { catalog: 'LCCN:sn90068379' },
// //             pinned: true,
// //             last_changed_by: 'kbates',
// //             value: -1,
// //             last_changed_by_group: 'TEAM_4'
// //         },
// //         startIndex: 101,
// //         startName: '0061',
// //         endName: '0115',
// //         endIndex: 202
// //     },
// //     {
// //         title_id: {
// //             title_research: { catalog: 'LCCN:sn90068380' },
// //             pinned: true,
// //             last_changed_by: 'kbates',
// //             value: -1,
// //             last_changed_by_group: 'TEAM_4'
// //         },
// //         startIndex: 203,
// //         startName: '0115-b',
// //         endName: '0168',
// //         endIndex: 308
// //     },
// //     {
// //         title_id: {
// //             title_research: { catalog: 'LCCN:sn90068381' },
// //             pinned: true,
// //             last_changed_by: 'kbates',
// //             value: -1,
// //             last_changed_by_group: 'TEAM_4'
// //         },
// //         startIndex: 309,
// //         startName: '0169',
// //         endName: '0326',
// //         endIndex: 622
// //     }
// // ]
