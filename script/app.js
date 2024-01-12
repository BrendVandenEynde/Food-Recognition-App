async function recognizeFood() {
    const imageInput = document.getElementById('image-input');
    const resultSection = document.getElementById('result-section');

    const file = imageInput.files[0];
    
    if (file) {
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch('/api/food-recognize', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                resultSection.innerHTML = `<p>${result.label}</p>`;
            } else {
                console.error('Failed to recognize food.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        console.error('No file selected.');
    }
}


