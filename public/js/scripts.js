document.addEventListener('DOMContentLoaded', function () {
    axios.get('/api/flashcard')
      .then(function (response) {
        const flashcards = response.data;
        const container = document.querySelector('.cards-container');
  
        flashcards.forEach(f => {
          const card = document.createElement('div');
          card.className = 'card';
  
          card.innerHTML = `
            <h4>${f.flashcard?.word || ''}</h4>
            <p>${f.flashcard?.translation || ''}</p>
            <p><strong>Definition:</strong> ${f.flashcard?.definition || ''}</p>
            <p><strong>Example:</strong> ${f.flashcard?.exampleSentence || ''}</p>
            <div class="card-buttons">
              <button class="btn update-btn" onclick="window.location.href='/update/${f.id}'">Update</button>
              <button class="btn delete-btn" data-id="${f.id}">Delete</button>
            </div>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(console.error);
  
    document.addEventListener('click', function (event) {
      if (event.target && event.target.classList.contains('delete-btn')) {
        const id = event.target.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this flashcard?')) {
          axios.delete(`/api/flashcard/${id}`)
            .then(() => location.reload())
            .catch(err => alert("Error deleting flashcard: " + err));
        }
      }
    });
  });
  