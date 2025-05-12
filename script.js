document.getElementById("searchInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const books = document.querySelectorAll(".book");
  
    books.forEach(book => {
      const text = book.textContent.toLowerCase();
      book.style.display = text.includes(filter) ? "block" : "none";
    });
  });
  