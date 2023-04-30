// const cards_data = [
//   {
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1683504000&Signature=EdDyDsoAvgJFCbsUtMGDrCBzs6FpoMFJ6TzoFwG~PeTZsMxvOc0nrFG40T8xLQTcgoTCI2TNujdjz7YuNPOhwOR09e4Y5SWW69LAdNaaGqlM9CdUlzx2PF3ZLEER2Rt6gtTuaWlECrMbtEEgacsOKsojwyf6jJYMbNBXYlFKlxBtuL~kg7T1x0uhAkOfoxnBRLw1Dxfa~32XPA5P4t0ynYOlEcN1OkHs5esRa2QfJr6SHlMOtHwUqd5b6mVIOHp2Oyj~vw4OECLT3SqzH6xpSKYL3xr3YmFS60NY3C~TSeAeqKCHsqcWPkhOCuHf-3rUx20qjQ~0PZ0lRkEOTWVUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     tag: "Article",
//     title: "What if famous brands had regular fonts? Meet RegulaBrands!",
//     content: "I've worked in UX for the better part of a decade. F..",
//     author: "Sarthak Kamra",
//     views: "1.4k views",
//     userImgUrl:
//       "https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1683504000&Signature=EdDyDsoAvgJFCbsUtMGDrCBzs6FpoMFJ6TzoFwG~PeTZsMxvOc0nrFG40T8xLQTcgoTCI2TNujdjz7YuNPOhwOR09e4Y5SWW69LAdNaaGqlM9CdUlzx2PF3ZLEER2Rt6gtTuaWlECrMbtEEgacsOKsojwyf6jJYMbNBXYlFKlxBtuL~kg7T1x0uhAkOfoxnBRLw1Dxfa~32XPA5P4t0ynYOlEcN1OkHs5esRa2QfJr6SHlMOtHwUqd5b6mVIOHp2Oyj~vw4OECLT3SqzH6xpSKYL3xr3YmFS60NY3C~TSeAeqKCHsqcWPkhOCuHf-3rUx20qjQ~0PZ0lRkEOTWVUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//   },
// ];

// const container = document.getElementById("cards-container");

// cards_data.forEach((result, idx) => {
//   const card = document.createElement("div");
//   card.classList = "card";
//   const content = `
//     <div class="card">
//     <img src=${result.imgUrl} class="card-img-top" alt="..."
//     <div class="card-body">
//         <div class="row">
//             <h5 class="col-12">${result.tag}</h5>
//         </div>

//         <div class="row">
//             <h4 class="card-title col-10">${result.title}</h5>
//             <h4 class-"col-2">...</h5>
//         </div>
//         <div class="row">
//             <p>${result.content}</p>
//         </div>
//         <div class="row">
//             <img class="col-2" src="${result.userImgUrl}" height=16 width=16></img>
//             <div class="col-4">
//                 <p class="fw-bold">${result.author}</p>
//                 <p>${result.views}</p>
//             </div>
//             <button type="button" class="col-4">Share</button>
//         </div>
//     </div>
//     </div>
//   `;

//   container.innerHTML += content;
// });

const Modal = document.querySelector(".signUpModal");

const closeModal = () => {
  console.log("click");
  Modal.style.cssText = "display:none !important";
};

const openModal = () => {
  console.log("click open");
  Modal.style.cssText = "display:flex !important";
};
