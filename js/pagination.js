document.addEventListener("DOMContentLoaded", () => {
    const currentPageE1 = document.getElementById("js-current-page");
    const pagination = document.querySelector(".c-pagination");
    const pathParts = window.location.pathname.split("/").filter(Boolean);

    function togglePaginationByWindth(){
      const spPaginationElements = document.querySelectorAll('.js-sp-prev-jump, .js-sp-prev, .js-sp-next, .js-sp-next-jump');
      const pcPagination = document.querySelector('.c-pagination');
    
    if (window.innerWidth <= 570) {
      spPaginationElements.forEach(el => el.style.display = 'block');
      if(pcPagination) pcPagination.style.display = 'none';
    }
    else {
      spPaginationElements.forEach(el => el.style.display = 'none');
      if(pcPagination) pcPagination.style.display = 'flex';
    }
  }
  togglePaginationByWindth();
  window.addEventListener('resize', togglePaginationByWindth);

    const path = window.location.pathname.replace(/\/$/, "");
     
    let currentPage ="1";

    if (path.includes("page-")) {
      const match= path.match(/page-(\d+)\.html/);
      if (match) {
          currentPage = match[1];
      }
   } else if  (path === "/archive" || path === "/archive.html") {
       currentPage = "1";
   }  

    if(currentPageE1) {
        currentPageE1.textContent = currentPage;
    }

    document.querySelectorAll(".c-pagination__item a").forEach((link) => { 
      if (link.textContent === currentPage) {
        link.classList.add("is-current");
      }
});

if (pagination) {
  pagination.innerHTML = "";

  const current = parseInt(currentPage);
  const total = 10;
  
  
  const prevPage = current - 1;
  const nextPage = current + 1;


  const prev = document.createElement("li");
  prev.innerHTML = `
    <a href="${current === 1 ? '#' : (prevPage === 1 ? 'archive.html' : `page-${prevPage}.html#`)}" 
       class="c-pagination__prev ${current === 1 ? 'is-disabled' : ''}" 
       aria-label="前のページ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.25" stroke="currentColor" class="c-pagination__icon">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
      </svg>
    </a>`;
  pagination.appendChild(prev);
  
  const start = current;
  const end = Math.min(total, start + 8);

  for (let i = start; i <= end; i++) {
    const li = document.createElement("li");
    li.className = "c-pagination__item";
    const a = document.createElement("a");
    a.href = i === 1 ? "archive.html" : `page-${i}.html`;
    a.textContent = i;
    if (i === current) {
      a.classList.add("is-current");
    }
    li.appendChild(a);
    pagination.appendChild(li);
  }

  const next = document.createElement("li");
  next.innerHTML = `
    <a href="${current === total ? '#' : `/page/${nextPage}/`}" 
       class="c-pagination__next ${current === total ? 'is-disabled' : ''}" 
       aria-label="次のページ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.25" stroke="currentColor" class="c-pagination__icon">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>
    </a>`;
  pagination.appendChild(next);
 }

 const current = parseInt(currentPage);
 const total = 10;
 const jumpAmount = 9;

 const prevJump = Math.max(1, current - jumpAmount);
 const nextJump = Math.min(total, current + jumpAmount);
 const prevNum = Math.max(1, current - 1);
 const nextNum = Math.min(total, current + 1);

 const spPrevJump =document.querySelector(".js-sp-prev-jump");
 const spPrev = document.querySelector(".js-sp-prev");
 const spNext = document.querySelector(".js-sp-next");
 const spNextJump = document.querySelector(".js-sp-next-jump");
 
 if (spPrevJump){
 spPrevJump.innerHTML = `
      <a href="${prevJump === 1 ? "/archive/" : `/page/${prevJump}/`}">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          stroke-width="1.25" stroke="currentColor" class="c-pagination__icon">
       <path stroke-linecap="round" stroke-linejoin="round" 
             d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
     </svg>
   </a>`;
 }

 if (spPrev) {
   spPrev.innerHTML = `
  <a href="${prevNum === 1 ? "/archive/" : `/page/${prevNum}/`}">前へ</a>`;
}
 
if (spNext) {
 spNext.innerHTML = `
  <a href="/page/${nextNum}/">次へ</a>`;
}
 
if (spNextJump) {
  spNextJump.innerHTML = `
    <a href="/page/${nextJump}/">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
          stroke-width="1.25" stroke="currentColor" class="c-pagination__icon">
       <path stroke-linecap="round" stroke-linejoin="round" 
             d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
     </svg>
   </a>`;
}

});


  