document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get selected genre
    const selectedGenre = document.querySelector('input[name="genre"]:checked').value;
    
    // Update results based on selection
    const results = {
        Fiction: 40,
        NonFiction: 20,
        Fantasy: 30,
        Mystery: 10
    };
    
    // Simulate polling results
    results[selectedGenre] += 10;
    
    // Calculate total votes
    const totalVotes = Object.values(results).reduce((a, b) => a + b, 0);
    
    // Update the poll results display
    document.getElementById('resultFiction').innerText = `Fiction: ${((results.Fiction / totalVotes) * 100).toFixed(1)}%`;
    document.getElementById('resultNonFiction').innerText = `Non-Fiction: ${((results.NonFiction / totalVotes) * 100).toFixed(1)}%`;
    document.getElementById('resultFantasy').innerText = `Fantasy: ${((results.Fantasy / totalVotes) * 100).toFixed(1)}%`;
    document.getElementById('resultMystery').innerText = `Mystery: ${((results.Mystery / totalVotes) * 100).toFixed(1)}%`;
    
    // Show results
    document.getElementById('pollResults').classList.remove('hidden');
});
